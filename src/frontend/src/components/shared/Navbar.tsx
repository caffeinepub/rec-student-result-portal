import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" as const, ocid: "nav.home_link" },
  { label: "About REC", to: "/about" as const, ocid: "nav.about_link" },
  {
    label: "Departments",
    to: "/departments" as const,
    ocid: "nav.departments_link",
  },
  { label: "Academics", to: "/academics" as const, ocid: "nav.academics_link" },
  {
    label: "Examination",
    to: "/examination" as const,
    ocid: "nav.examination_link",
  },
  { label: "Contact", to: "/contact" as const, ocid: "nav.contact_link" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  return (
    <header className="w-full">
      {/* Top bar: logo + college name */}
      <div className="rec-gradient py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
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

      {/* Navigation bar */}
      <nav className="bg-rec-gold shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-11">
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`px-4 py-2 text-sm font-semibold transition-colors rounded ${
                    isActive
                      ? "bg-rec-navy text-white"
                      : "text-rec-navy hover:bg-rec-navy hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-rec-navy hover:bg-rec-navy hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-rec-gold border-t border-amber-500 px-4 py-2 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-semibold rounded transition-colors ${
                    isActive
                      ? "bg-rec-navy text-white"
                      : "text-rec-navy hover:bg-rec-navy hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
