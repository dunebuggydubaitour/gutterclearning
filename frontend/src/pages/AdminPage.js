import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Lock, LogOut, Trash2, Phone, Mail, Clock, Users, AlertCircle, RefreshCw, CheckCircle } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0 });
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (pw) => {
    setLoading(true);
    try {
      const [leadsRes, statsRes] = await Promise.all([
        axios.get(`${API}/admin/leads?password=${pw}`),
        axios.get(`${API}/admin/stats?password=${pw}`),
      ]);
      setLeads(leadsRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.error("Failed to fetch data", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    try {
      await axios.post(`${API}/admin/login`, { password });
      setAuthenticated(true);
      localStorage.setItem("admin_pw", password);
      fetchData(password);
    } catch (err) {
      setAuthError("Invalid password");
    }
  };

  useEffect(() => {
    const savedPw = localStorage.getItem("admin_pw");
    if (savedPw) {
      setPassword(savedPw);
      axios.post(`${API}/admin/login`, { password: savedPw })
        .then(() => { setAuthenticated(true); fetchData(savedPw); })
        .catch(() => localStorage.removeItem("admin_pw"));
    }
  }, [fetchData]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    try {
      await axios.delete(`${API}/admin/leads/${id}?password=${password}`);
      fetchData(password);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.patch(`${API}/admin/leads/${id}/status?password=${password}&status=${status}`);
      fetchData(password);
    } catch (err) {
      console.error("Status update failed", err);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword("");
    setLeads([]);
    localStorage.removeItem("admin_pw");
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4" data-testid="admin-login-page">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 w-full max-w-md shadow-lg">
          <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-7 h-7 text-[#1E3A8A]" />
          </div>
          <h1 className="text-2xl font-bold text-center text-[#0F172A] mb-2" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Admin Access
          </h1>
          <p className="text-sm text-[#475569] text-center mb-6">Enter the admin password to view leads.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="h-12"
              data-testid="admin-password-input"
            />
            {authError && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" /> {authError}
              </div>
            )}
            <button
              type="submit"
              className="w-full h-12 bg-[#1E3A8A] text-white rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors"
              data-testid="admin-login-btn"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]" data-testid="admin-dashboard">
      {/* Admin Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-lg font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
            Lead Dashboard
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchData(password)}
              className="flex items-center gap-1.5 text-sm text-[#475569] hover:text-[#0F172A] transition-colors"
              data-testid="admin-refresh-btn"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 transition-colors"
              data-testid="admin-logout-btn"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Leads", value: stats.total, icon: Users, color: "bg-[#1E3A8A]/10 text-[#1E3A8A]" },
            { label: "New Leads", value: stats.new, icon: AlertCircle, color: "bg-amber-100 text-amber-600" },
            { label: "Contacted", value: stats.contacted, icon: CheckCircle, color: "bg-emerald-100 text-emerald-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 flex items-center gap-4" data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">{stat.value}</div>
                <div className="text-xs text-[#475569]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-bold text-[#0F172A]" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
              All Leads ({leads.length})
            </h2>
          </div>
          {leads.length === 0 ? (
            <div className="p-12 text-center text-[#475569]">
              <Users className="w-10 h-10 mx-auto mb-3 text-slate-300" />
              <p className="font-medium">No leads yet</p>
              <p className="text-sm mt-1">Leads will appear here when customers submit the contact form.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table data-testid="leads-table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Name</TableHead>
                    <TableHead className="text-xs">Contact</TableHead>
                    <TableHead className="text-xs">Service</TableHead>
                    <TableHead className="text-xs">Message</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs">Date</TableHead>
                    <TableHead className="text-xs">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id} data-testid={`lead-row-${lead.id}`}>
                      <TableCell className="font-medium text-[#0F172A]">{lead.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className="flex items-center gap-1 text-xs text-[#475569]">
                            <Mail className="w-3 h-3" /> {lead.email}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-[#475569]">
                            <Phone className="w-3 h-3" /> {lead.phone}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{lead.service_type}</TableCell>
                      <TableCell className="text-sm text-[#475569] max-w-[200px] truncate">{lead.message || "-"}</TableCell>
                      <TableCell>
                        <button
                          onClick={() => handleStatusUpdate(lead.id, lead.status === "new" ? "contacted" : "new")}
                          data-testid={`status-toggle-${lead.id}`}
                        >
                          <Badge variant={lead.status === "new" ? "default" : "secondary"} className={
                            lead.status === "new"
                              ? "bg-amber-100 text-amber-800 hover:bg-amber-200 cursor-pointer"
                              : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 cursor-pointer"
                          }>
                            {lead.status}
                          </Badge>
                        </button>
                      </TableCell>
                      <TableCell className="text-xs text-[#475569]">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(lead.created_at).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="text-red-400 hover:text-red-600 transition-colors p-1"
                          data-testid={`delete-lead-${lead.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
