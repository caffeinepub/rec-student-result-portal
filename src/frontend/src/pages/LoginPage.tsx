import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { AlertCircle, Lock, Menu, User, X } from "lucide-react";
import { type FormEvent, useState } from "react";
import Footer from "../components/shared/Footer";
import { useActor } from "../hooks/useActor";

interface LoginPageProps {
  onLogin: (token: string) => void;
}

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About REC", to: "/about" as const },
  { label: "Departments", to: "/departments" as const },
  { label: "Academics", to: "/academics" as const },
  { label: "Examination", to: "/examination" as const },
  { label: "Contact", to: "/contact" as const },
];

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { actor } = useActor();

  const VALID_ID = "yashwanth.c.2024.aiml@rajalakshmi.edu.in";
  const VALID_PW = "241501251";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Try backend first; fall back to local validation if actor is unavailable
      if (actor) {
        try {
          const token = await actor.login(loginId, password);
          if (token && token !== "") {
            onLogin(token);
            return;
          }
        } catch {
          // Backend rejected the credentials or is unavailable -- fall through to local check
        }
      }

      // Local credential check (fallback for when backend actor isn't ready)
      if (loginId === VALID_ID && password === VALID_PW) {
        onLogin(`local_session_${Date.now()}`);
      } else {
        setError("Invalid Login ID or Password");
      }
    } catch {
      setError("Invalid Login ID or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="rec-gradient py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/generated/rec-logo-transparent.dim_120x120.png"
              alt="REC Logo"
              className="h-14 w-14 object-contain"
            />
            <div>
              <p className="text-white font-display font-bold text-lg md:text-xl leading-tight">
                Rajalakshmi Engineering College
              </p>
              <p className="text-blue-200 text-xs">
                Autonomous Institution | Affiliated to Anna University
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-rec-gold shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-11">
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                className="px-4 py-2 text-sm font-semibold text-rec-navy hover:bg-rec-navy hover:text-white transition-colors rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="md:hidden text-rec-navy p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-rec-gold border-t border-amber-500 px-4 py-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-rec-navy hover:bg-rec-navy hover:text-white rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero body */}
      <main className="flex-1 rec-gradient-hero flex items-center justify-center py-12 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-rec-gold/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-white/3 blur-2xl" />
        </div>

        {/* Login card */}
        <div className="relative w-full max-w-md">
          {/* Card top accent */}
          <div className="h-1.5 w-full bg-rec-gold rounded-t-xl" />
          <div className="bg-white rounded-b-xl card-shadow-lg p-8">
            {/* Portal icon */}
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-rec-navy flex items-center justify-center">
                <Lock className="h-8 w-8 text-rec-gold" />
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-rec-navy text-center mb-1">
              Student Result Portal
            </h2>
            <p className="text-muted-foreground text-sm text-center mb-7">
              Login to view your results
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Login ID */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="loginId"
                  className="text-rec-navy font-semibold text-sm"
                >
                  Login ID
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="loginId"
                    type="email"
                    data-ocid="login.input"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="your.id@rajalakshmi.edu.in"
                    required
                    className="w-full h-10 pl-9 pr-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="password"
                  className="text-rec-navy font-semibold text-sm"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="password"
                    type="password"
                    data-ocid="login.password_input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full h-10 pl-9 pr-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  data-ocid="login.error_state"
                  className="flex items-center gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                data-ocid="login.submit_button"
                disabled={loading}
                className="w-full h-11 bg-rec-navy hover:bg-rec-navy/90 text-white font-bold text-base transition-all"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3V0a12 12 0 100 24v-4l-3 3 3 3v4a12 12 0 000-24z"
                      />
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "Login"
                )}
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-6">
              For login assistance, contact the Examination Cell
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
