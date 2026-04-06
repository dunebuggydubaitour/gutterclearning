"""
Backend API tests for Iteration 3 - Gutter Cleaning Jacksonville FL
Tests: Lead creation API (used by contact forms on service area detail pages)
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestLeadsAPI:
    """Test lead creation API used by contact forms on service area pages"""
    
    def test_api_root_endpoint(self):
        """Test API root endpoint is accessible"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print(f"✓ API root endpoint working: {data['message']}")
    
    def test_create_lead_from_service_area_page(self):
        """Test lead creation from service area detail page contact form"""
        unique_email = f"test_stjohns_{uuid.uuid4().hex[:8]}@example.com"
        lead_data = {
            "name": "Test User St Johns",
            "email": unique_email,
            "phone": "904-555-1234",
            "address": "123 Main St, St Johns, FL",
            "service_type": "Gutter Cleaning",
            "message": "Need gutter cleaning for my St Johns home"
        }
        
        response = requests.post(f"{BASE_URL}/api/leads", json=lead_data)
        assert response.status_code == 200
        
        data = response.json()
        assert data["name"] == lead_data["name"]
        assert data["email"] == lead_data["email"]
        assert data["phone"] == lead_data["phone"]
        assert data["address"] == lead_data["address"]
        assert data["service_type"] == lead_data["service_type"]
        assert data["message"] == lead_data["message"]
        assert "id" in data
        assert "created_at" in data
        assert data["status"] == "new"
        print(f"✓ Lead created successfully with ID: {data['id']}")
    
    def test_create_lead_minimal_fields(self):
        """Test lead creation with minimal required fields"""
        unique_email = f"test_minimal_{uuid.uuid4().hex[:8]}@example.com"
        lead_data = {
            "name": "Minimal Test",
            "email": unique_email,
            "phone": "904-555-0000",
            "service_type": "Gutter Repair"
        }
        
        response = requests.post(f"{BASE_URL}/api/leads", json=lead_data)
        assert response.status_code == 200
        
        data = response.json()
        assert data["name"] == lead_data["name"]
        assert data["email"] == lead_data["email"]
        assert data["address"] == ""  # Default empty
        assert data["message"] == ""  # Default empty
        print("✓ Lead created with minimal fields")
    
    def test_create_lead_atlantic_beach_area(self):
        """Test lead creation from Atlantic Beach service area page"""
        unique_email = f"test_atlantic_{uuid.uuid4().hex[:8]}@example.com"
        lead_data = {
            "name": "Atlantic Beach Customer",
            "email": unique_email,
            "phone": "904-555-5678",
            "address": "456 Ocean Blvd, Atlantic Beach, FL",
            "service_type": "Gutter Guards",
            "message": "Interested in gutter guards for coastal home"
        }
        
        response = requests.post(f"{BASE_URL}/api/leads", json=lead_data)
        assert response.status_code == 200
        
        data = response.json()
        assert data["service_type"] == "Gutter Guards"
        print("✓ Lead from Atlantic Beach area created")


class TestAdminAPI:
    """Test admin API endpoints"""
    
    def test_admin_login_valid(self):
        """Test admin login with valid password"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={"password": "gutterjax2024"})
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        print("✓ Admin login successful with valid password")
    
    def test_admin_login_invalid(self):
        """Test admin login with invalid password"""
        response = requests.post(f"{BASE_URL}/api/admin/login", json={"password": "wrongpassword"})
        assert response.status_code == 401
        print("✓ Admin login correctly rejected invalid password")
    
    def test_admin_get_leads(self):
        """Test admin can retrieve leads"""
        response = requests.get(f"{BASE_URL}/api/admin/leads?password=gutterjax2024")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Admin retrieved {len(data)} leads")
    
    def test_admin_get_stats(self):
        """Test admin can retrieve stats"""
        response = requests.get(f"{BASE_URL}/api/admin/stats?password=gutterjax2024")
        assert response.status_code == 200
        data = response.json()
        assert "total" in data
        assert "new" in data
        assert "contacted" in data
        print(f"✓ Admin stats: total={data['total']}, new={data['new']}, contacted={data['contacted']}")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
