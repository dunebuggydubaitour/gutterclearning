import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ContactForm = ({ variant = "default" }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", service_type: "Gutter Cleaning", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, form);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", address: "", service_type: "Gutter Cleaning", message: "" });
    } catch (err) {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-12" data-testid="form-success">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}>
          Thank You!
        </h3>
        <p className="text-[#475569] mb-4">We received your request and will contact you shortly.</p>
        <p className="text-sm text-[#475569]">
          Need immediate help? Call{" "}
          <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#1E3A8A] font-semibold">{BUSINESS.phone}</a>
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-sm text-[#1E3A8A] font-medium hover:underline"
          data-testid="submit-another-btn"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Full Name *</label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="h-12 border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
            data-testid="input-name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Email *</label>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="h-12 border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
            data-testid="input-email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Phone *</label>
          <Input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(904) 555-0123"
            className="h-12 border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
            data-testid="input-phone"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Service Needed</label>
          <Select value={form.service_type} onValueChange={(val) => setForm({ ...form, service_type: val })}>
            <SelectTrigger className="h-12 border-slate-200" data-testid="select-service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Gutter Cleaning">Gutter Cleaning</SelectItem>
              <SelectItem value="Gutter Installation">Gutter Installation</SelectItem>
              <SelectItem value="Gutter Repair">Gutter Repair</SelectItem>
              <SelectItem value="Gutter Guards">Gutter Guards</SelectItem>
              <SelectItem value="Downspout Services">Downspout Services</SelectItem>
              <SelectItem value="Gutter Replacement">Gutter Replacement</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Address (Optional)</label>
        <Input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="123 Main St, Jacksonville, FL"
          className="h-12 border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
          data-testid="input-address"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Message (Optional)</label>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your gutter needs..."
          rows={4}
          className="border-slate-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
          data-testid="input-message"
        />
      </div>
      {error && <p className="text-red-600 text-sm" data-testid="form-error">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-[#1E3A8A] text-white rounded-lg font-semibold text-base hover:bg-[#1E40AF] transition-colors shadow-md disabled:opacity-60 flex items-center justify-center gap-2"
        data-testid="submit-form-btn"
      >
        {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : "Get Your Free Quote"}
      </button>
      <p className="text-xs text-[#475569] text-center">
        Or call us directly at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[#1E3A8A] font-semibold">{BUSINESS.phone}</a>
      </p>
    </form>
  );
};

export default ContactForm;
