#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class GutterCleaningAPITester:
    def __init__(self, base_url="https://jax-rainfall-guard.preview.emergentagent.com"):
        self.base_url = base_url
        self.admin_password = "gutterjax2024"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {details}")
        
        self.test_results.append({
            "test": name,
            "success": success,
            "details": details
        })

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Message: {data.get('message', 'No message')}"
            self.log_test("API Root", success, details)
            return success
        except Exception as e:
            self.log_test("API Root", False, str(e))
            return False

    def test_create_lead(self):
        """Test creating a lead"""
        test_lead = {
            "name": "Test Customer",
            "email": "test@example.com",
            "phone": "(904) 555-0123",
            "address": "123 Test St, Jacksonville, FL",
            "service_type": "Gutter Cleaning",
            "message": "Test message for gutter cleaning"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/api/leads",
                json=test_lead,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                # Store lead ID for later tests
                self.test_lead_id = data.get('id')
                details += f", Lead ID: {self.test_lead_id}"
            else:
                details += f", Response: {response.text}"
                
            self.log_test("Create Lead", success, details)
            return success
        except Exception as e:
            self.log_test("Create Lead", False, str(e))
            return False

    def test_admin_login_valid(self):
        """Test admin login with valid password"""
        try:
            response = requests.post(
                f"{self.base_url}/api/admin/login",
                json={"password": self.admin_password},
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Success: {data.get('success')}"
            else:
                details += f", Response: {response.text}"
                
            self.log_test("Admin Login (Valid)", success, details)
            return success
        except Exception as e:
            self.log_test("Admin Login (Valid)", False, str(e))
            return False

    def test_admin_login_invalid(self):
        """Test admin login with invalid password"""
        try:
            response = requests.post(
                f"{self.base_url}/api/admin/login",
                json={"password": "wrongpassword"},
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            success = response.status_code == 401
            details = f"Status: {response.status_code} (Expected 401)"
            
            self.log_test("Admin Login (Invalid)", success, details)
            return success
        except Exception as e:
            self.log_test("Admin Login (Invalid)", False, str(e))
            return False

    def test_get_leads(self):
        """Test getting leads with admin password"""
        try:
            response = requests.get(
                f"{self.base_url}/api/admin/leads?password={self.admin_password}",
                timeout=10
            )
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Leads count: {len(data)}"
            else:
                details += f", Response: {response.text}"
                
            self.log_test("Get Leads", success, details)
            return success
        except Exception as e:
            self.log_test("Get Leads", False, str(e))
            return False

    def test_get_leads_unauthorized(self):
        """Test getting leads without password"""
        try:
            response = requests.get(f"{self.base_url}/api/admin/leads", timeout=10)
            success = response.status_code == 401
            details = f"Status: {response.status_code} (Expected 401)"
            
            self.log_test("Get Leads (Unauthorized)", success, details)
            return success
        except Exception as e:
            self.log_test("Get Leads (Unauthorized)", False, str(e))
            return False

    def test_get_stats(self):
        """Test getting admin stats"""
        try:
            response = requests.get(
                f"{self.base_url}/api/admin/stats?password={self.admin_password}",
                timeout=10
            )
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Total: {data.get('total')}, New: {data.get('new')}, Contacted: {data.get('contacted')}"
            else:
                details += f", Response: {response.text}"
                
            self.log_test("Get Stats", success, details)
            return success
        except Exception as e:
            self.log_test("Get Stats", False, str(e))
            return False

    def test_update_lead_status(self):
        """Test updating lead status"""
        if not hasattr(self, 'test_lead_id') or not self.test_lead_id:
            self.log_test("Update Lead Status", False, "No test lead ID available")
            return False
            
        try:
            response = requests.patch(
                f"{self.base_url}/api/admin/leads/{self.test_lead_id}/status?password={self.admin_password}&status=contacted",
                timeout=10
            )
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Success: {data.get('success')}"
            else:
                details += f", Response: {response.text}"
                
            self.log_test("Update Lead Status", success, details)
            return success
        except Exception as e:
            self.log_test("Update Lead Status", False, str(e))
            return False

    def test_delete_lead(self):
        """Test deleting a lead"""
        if not hasattr(self, 'test_lead_id') or not self.test_lead_id:
            self.log_test("Delete Lead", False, "No test lead ID available")
            return False
            
        try:
            response = requests.delete(
                f"{self.base_url}/api/admin/leads/{self.test_lead_id}?password={self.admin_password}",
                timeout=10
            )
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Success: {data.get('success')}"
            else:
                details += f", Response: {response.text}"
                
            self.log_test("Delete Lead", success, details)
            return success
        except Exception as e:
            self.log_test("Delete Lead", False, str(e))
            return False

    def run_all_tests(self):
        """Run all API tests"""
        print("🧪 Starting Gutter Cleaning Jacksonville API Tests")
        print(f"🌐 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Test API availability first
        if not self.test_api_root():
            print("❌ API is not accessible. Stopping tests.")
            return False
        
        # Test lead creation
        self.test_create_lead()
        
        # Test admin authentication
        self.test_admin_login_valid()
        self.test_admin_login_invalid()
        
        # Test admin endpoints
        self.test_get_leads()
        self.test_get_leads_unauthorized()
        self.test_get_stats()
        
        # Test lead management (if we have a test lead)
        self.test_update_lead_status()
        self.test_delete_lead()
        
        # Print summary
        print("=" * 60)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print("⚠️  Some tests failed. Check the details above.")
            return False

def main():
    tester = GutterCleaningAPITester()
    success = tester.run_all_tests()
    
    # Save detailed results
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            'timestamp': datetime.now().isoformat(),
            'total_tests': tester.tests_run,
            'passed_tests': tester.tests_passed,
            'success_rate': f"{(tester.tests_passed/tester.tests_run*100):.1f}%" if tester.tests_run > 0 else "0%",
            'results': tester.test_results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())