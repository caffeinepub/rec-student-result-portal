import { Briefcase, Building2, Star, TrendingUp, Users } from "lucide-react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const stats = [
  {
    label: "Placement Rate",
    value: "95%",
    icon: TrendingUp,
    desc: "Consistent year-over-year",
  },
  {
    label: "Companies Visited",
    value: "500+",
    icon: Building2,
    desc: "Fortune 500 & startups",
  },
  {
    label: "Highest Package",
    value: "₹42 LPA",
    icon: Star,
    desc: "International offer 2024",
  },
  {
    label: "Average Package",
    value: "₹7.2 LPA",
    icon: Users,
    desc: "Class of 2024",
  },
];

const recruiters = [
  "TCS",
  "Infosys",
  "Wipro",
  "Cognizant",
  "HCL Technologies",
  "Accenture",
  "Capgemini",
  "L&T Technology",
  "Amazon",
  "Google",
  "Microsoft",
  "IBM",
  "Oracle",
  "Zoho",
  "Freshworks",
  "Ford",
  "Caterpillar",
  "Honeywell",
  "Siemens",
  "ABB",
];

const internships = [
  {
    title: "Summer Internship Program",
    duration: "6–8 Weeks",
    companies: "150+ Partner Companies",
    desc: "Structured internship in May–June with stipend-bearing roles in top IT and core companies.",
  },
  {
    title: "Industry Project (Final Year)",
    duration: "6 Months",
    companies: "On-site Industry Projects",
    desc: "Final-year students work on live industry projects under company mentors and faculty supervisors.",
  },
  {
    title: "Internship-on-Campus",
    duration: "Ongoing",
    companies: "Remote Opportunities",
    desc: "Companies post part-time and remote internship opportunities accessible to students year-round.",
  },
];

export default function PlacementsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="rec-gradient py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Placements
          </h1>
          <div className="w-24 h-1 bg-rec-gold mx-auto mb-5" />
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Connecting talent with opportunity — consistently one of Tamil
            Nadu's top placement colleges.
          </p>
        </div>
      </section>
      <div className="h-1.5 bg-rec-gold" />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {/* Stats */}
          <section>
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl text-rec-navy">
                Placement Statistics
              </h2>
              <div className="w-16 h-1 bg-rec-gold mx-auto mt-3" />
              <p className="text-muted-foreground text-sm mt-2">
                Academic Year 2023–24
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map(({ label, value, icon: Icon, desc }) => (
                <div
                  key={label}
                  data-ocid="placements.stats.card"
                  className="bg-white rounded-xl card-shadow p-6 text-center hover:card-shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-rec-navy flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-rec-gold" />
                  </div>
                  <p className="font-display font-bold text-3xl text-rec-navy">
                    {value}
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground mt-1">
                    {label}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Top Recruiters */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rec-navy flex items-center justify-center">
                <Building2 className="h-5 w-5 text-rec-gold" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-rec-navy">
                  Top Recruiters
                </h2>
                <p className="text-sm text-muted-foreground">
                  Companies that regularly hire from REC
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl card-shadow p-7">
              <div className="flex flex-wrap gap-3">
                {recruiters.map((company) => (
                  <span
                    key={company}
                    className="px-4 py-2 border border-rec-navy/20 rounded-lg text-sm font-semibold text-rec-navy hover:bg-rec-navy hover:text-white transition-colors cursor-default"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Internship */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rec-navy flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-rec-gold" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-rec-navy">
                  Internship Opportunities
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {internships.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl card-shadow p-6 border-t-4 border-rec-navy"
                >
                  <h3 className="font-display font-bold text-rec-navy text-lg mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="bg-rec-gold/15 text-rec-navy font-semibold px-2 py-0.5 rounded">
                      {item.duration}
                    </span>
                    <span>{item.companies}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rec-gradient rounded-2xl p-10 text-center">
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              Are you a Recruiter?
            </h2>
            <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
              Partner with REC to hire from a pool of talented, industry-ready
              engineers. Contact our Placement Cell today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-rec-gold text-rec-navy font-bold px-6 py-3 rounded-lg hover:bg-rec-gold/90 transition-colors"
            >
              Contact Placement Cell
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
