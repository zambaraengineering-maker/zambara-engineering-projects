import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactsSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacts" className="bg-gradient-to-b from-black via-gray-950 to-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-500 text-sm font-bold tracking-[0.3em] uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-black text-yellow-400 tracking-wider">CONTACT US</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Ready to elevate your engineering projects? Reach out and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Connect With Us</h3>
              <div className="space-y-5">
                {[
                { icon: Mail, label: "Email", value: "info@zambaraengineering.com" },
                { icon: Phone, label: "Phone", value: "+1 (800) ZEP-PROJ" },
                { icon: MapPin, label: "Location", value: "Johannesburg, South Africa" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-900/30 border border-yellow-600/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-yellow-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
                      <p className="text-white font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-600/20 bg-yellow-900/10 p-6">
              <p className="text-yellow-400 font-bold mb-2">Office Hours</p>
              <p className="text-gray-400 text-sm">Monday – Friday: 8:00 AM – 6:00 PM</p>
              <p className="text-gray-400 text-sm">Saturday: 9:00 AM – 1:00 PM</p>
              <p className="text-gray-500 text-sm mt-2">Sunday: Closed</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500/60 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500/60 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500/60 transition-colors"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500/60 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {sent && (
              <div className="rounded-xl bg-green-900/30 border border-green-500/40 px-4 py-3 text-green-400 text-sm font-medium">
                ✓ Message sent! We'll be in touch soon.
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-black rounded-xl uppercase tracking-widest text-sm hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-xl shadow-yellow-600/30 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}