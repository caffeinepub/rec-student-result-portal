import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="rec-gradient py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-rec-gold mx-auto mb-5" />
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            We'd love to hear from you. Reach out for admissions, placements, or
            any enquiry.
          </p>
        </div>
      </section>
      <div className="h-1.5 bg-rec-gold" />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl card-shadow p-7">
                <h2 className="font-display font-bold text-2xl text-rec-navy mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      value:
                        "Bangalore Highway, Thandalam\nChennai – 602105\nTamil Nadu, India",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 44 6718 1111",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@rajalakshmi.edu.in",
                    },
                    {
                      icon: Clock,
                      label: "Office Hours",
                      value:
                        "Monday – Friday: 9:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM",
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-rec-navy flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-rec-gold" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                          {label}
                        </p>
                        <p className="text-sm text-rec-navy font-medium whitespace-pre-line">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Departments contact */}
              <div className="bg-white rounded-xl card-shadow p-7">
                <h3 className="font-display font-bold text-xl text-rec-navy mb-4">
                  Key Contacts
                </h3>
                <div className="space-y-3">
                  {[
                    ["Principal's Office", "+91 44 6718 1100"],
                    ["Admissions Cell", "+91 44 6718 1200"],
                    ["Examination Cell", "+91 44 6718 1300"],
                    ["Placement Office", "+91 44 6718 1400"],
                    ["Hostel Office", "+91 44 6718 1500"],
                  ].map(([dept, ph]) => (
                    <div
                      key={dept}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">
                        {dept}
                      </span>
                      <span className="text-sm font-semibold text-rec-navy">
                        {ph}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl card-shadow overflow-hidden">
                <div className="rec-gradient px-6 py-4 flex items-center gap-2">
                  <Send className="h-4 w-4 text-rec-gold" />
                  <h2 className="font-semibold text-white">
                    Send us a Message
                  </h2>
                </div>
                <div className="p-7">
                  {submitted && (
                    <div className="mb-5 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                      ✓ Message sent successfully! We'll get back to you within
                      2 business days.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="text-rec-navy font-semibold text-sm"
                        >
                          Your Name *
                        </Label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState((p) => ({
                              ...p,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Full name"
                          className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="cemail"
                          className="text-rec-navy font-semibold text-sm"
                        >
                          Email Address *
                        </Label>
                        <input
                          id="cemail"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState((p) => ({
                              ...p,
                              email: e.target.value,
                            }))
                          }
                          placeholder="your@email.com"
                          className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="subject"
                        className="text-rec-navy font-semibold text-sm"
                      >
                        Subject *
                      </Label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            subject: e.target.value,
                          }))
                        }
                        placeholder="How can we help?"
                        className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-rec-navy font-semibold text-sm"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Write your message here..."
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-11 bg-rec-navy hover:bg-rec-navy/90 text-white font-bold gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-white rounded-xl card-shadow overflow-hidden">
                <div className="h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center border border-blue-100">
                  <MapPin className="h-10 w-10 text-rec-navy/40 mb-3" />
                  <p className="text-sm font-semibold text-rec-navy/60">
                    Bangalore Highway, Thandalam
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Chennai – 602105
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rajalakshmi+Engineering+College+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-xs font-bold text-rec-navy underline hover:text-rec-gold transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
