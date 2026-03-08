import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-ocid="footer.section"
      className="rec-gradient text-white mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/assets/generated/rec-logo-transparent.dim_120x120.png"
              alt="REC Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-display font-bold text-base leading-tight">
                Rajalakshmi Engineering College
              </p>
              <p className="text-blue-200 text-xs">NAAC A++ Accredited</p>
            </div>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            An Autonomous Institution affiliated to Anna University, Chennai.
            Approved by AICTE and accredited with NAAC A++ grade.
          </p>
          <div className="mt-4 space-y-1 text-sm text-blue-200">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-rec-gold" />
              <span>
                Bangalore Highway, Thandalam, Chennai – 602105, Tamil Nadu,
                India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-rec-gold" />
              <span>+91 44 6718 1111</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-rec-gold" />
              <span>info@rajalakshmi.edu.in</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-rec-gold mb-3 text-base">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About REC
              </Link>
            </li>
            <li>
              <Link
                to="/departments"
                className="hover:text-white transition-colors"
              >
                Departments
              </Link>
            </li>
            <li>
              <Link
                to="/academics"
                className="hover:text-white transition-colors"
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                to="/placements"
                className="hover:text-white transition-colors"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                to="/examination"
                className="hover:text-white transition-colors"
              >
                Examination Cell
              </Link>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="font-display font-bold text-rec-gold mb-3 text-base">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-blue-200">
            <li>
              <Link
                to="/placements"
                className="hover:text-white transition-colors"
              >
                Placements
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Student Portal
              </Link>
            </li>
            <li>
              <span className="hover:text-white transition-colors cursor-default">
                Faculty Portal
              </span>
            </li>
            <li>
              <span className="hover:text-white transition-colors cursor-default">
                Library
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-blue-200">
          <p>© {year} Rajalakshmi Engineering College. All Rights Reserved.</p>
          <p>
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rec-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
