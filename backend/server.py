from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'admin123')

app = FastAPI()
api_router = APIRouter(prefix="/api")


class LeadCreate(BaseModel):
    name: str
    email: str
    phone: str
    address: Optional[str] = ""
    service_type: str = "Gutter Cleaning"
    message: Optional[str] = ""


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    address: str = ""
    service_type: str = "Gutter Cleaning"
    message: str = ""
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    status: str = "new"


class AdminLogin(BaseModel):
    password: str


@api_router.get("/")
async def root():
    return {"message": "Gutter Cleaning Jacksonville Florida API"}


@api_router.post("/leads")
async def create_lead(input_data: LeadCreate):
    lead = Lead(**input_data.model_dump())
    doc = lead.model_dump()
    await db.leads.insert_one(doc)
    doc.pop("_id", None)
    return doc


@api_router.post("/admin/login")
async def admin_login(data: AdminLogin):
    if data.password == ADMIN_PASSWORD:
        return {"success": True}
    raise HTTPException(status_code=401, detail="Invalid password")


@api_router.get("/admin/leads")
async def get_leads(password: str = ""):
    if password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized")
    leads = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return leads


@api_router.get("/admin/stats")
async def get_stats(password: str = ""):
    if password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized")
    total = await db.leads.count_documents({})
    new_count = await db.leads.count_documents({"status": "new"})
    contacted = await db.leads.count_documents({"status": "contacted"})
    return {"total": total, "new": new_count, "contacted": contacted}


@api_router.delete("/admin/leads/{lead_id}")
async def delete_lead(lead_id: str, password: str = ""):
    if password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized")
    result = await db.leads.delete_one({"id": lead_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Lead not found")
    return {"success": True}


@api_router.patch("/admin/leads/{lead_id}/status")
async def update_lead_status(lead_id: str, password: str = "", status: str = "contacted"):
    if password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Unauthorized")
    await db.leads.update_one({"id": lead_id}, {"$set": {"status": status}})
    return {"success": True}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
