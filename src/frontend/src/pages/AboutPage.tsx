import {
  Award,
  BookOpen,
  Building2,
  FlaskConical,
  Star,
  Users,
} from "lucide-react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const highlights = [
  {
    icon: Building2,
    title: "Established 1997",
    desc: "Over 25 years of academic excellence in Tamil Nadu",
  },
  {
    icon: Users,
    title: "5000+ Students",
    desc: "A vibrant campus community across UG, PG and Research programmes",
  },
  {
    icon: Award,
    title: "NAAC A++",
    desc: "Highest accreditation grade, recognized for academic quality",
  },
  {
    icon: BookOpen,
    title: "200+ Faculty",
    desc: "Experienced professors and industry-aligned academic mentors",
  },
  {
    icon: FlaskConical,
    title: "Modern Labs",
    desc: "State-of-the-art infrastructure with industry-standard equipment",
  },
  {
    icon: Star,
    title: "Top Placements",
    desc: "Consistent 95%+ placement rate with Fortune 500 recruiters",
  },
];

const accreditations = [
  "NAAC A++ Accredited",
  "Affiliated to Anna University",
  "Approved by AICTE",
  "NBA Accredited Programs",
  "ISO 9001:2015 Certified",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="rec-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            About Rajalakshmi Engineering College
          </h1>
          <div className="w-24 h-1 bg-rec-gold mx-auto mb-6" />
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            A premier engineering institution shaping future-ready engineers
            since 1997.
          </p>
        </div>
      </section>

      {/* Gold accent */}
      <div className="h-1.5 bg-rec-gold" />

      <main className="flex-1 bg-gray-50">
        {/* About Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-rec-gold/10 text-rec-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Our Legacy
              </div>
              <h2 className="font-display font-bold text-3xl text-rec-navy mb-5">
                Excellence in Engineering Education
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Rajalakshmi Engineering College (REC) was established in 1997
                  and is located at Thandalam, Chennai, Tamil Nadu. The
                  institution is affiliated to Anna University and approved by
                  AICTE, functioning as an Autonomous Institution.
                </p>
                <p>
                  REC has been granted NAAC A++ accreditation — the highest
                  grade awarded by the National Assessment and Accreditation
                  Council — recognizing its commitment to quality education,
                  research, and holistic student development.
                </p>
                <p>
                  With over 5000 students, 200+ dedicated faculty members, and a
                  sprawling modern campus, REC continues to produce
                  industry-ready engineers who contribute to national and global
                  development.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl card-shadow p-8">
              <h3 className="font-display font-bold text-xl text-rec-navy mb-5">
                At a Glance
              </h3>
              <div className="space-y-3">
                {[
                  ["Founded", "1997"],
                  ["Location", "Thandalam, Chennai – 602105"],
                  ["Affiliation", "Anna University"],
                  ["Accreditation", "NAAC A++"],
                  ["Approval", "AICTE"],
                  ["Type", "Autonomous Institution"],
                  ["Campus Area", "100+ Acres"],
                ].map(([key, val]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-sm font-semibold text-muted-foreground">
                      {key}
                    </span>
                    <span className="text-sm font-bold text-rec-navy">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display font-bold text-3xl text-rec-navy">
                Vision & Mission
              </h2>
              <div className="w-16 h-1 bg-rec-gold mx-auto mt-3" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-rec-navy rounded-xl p-8 text-white">
                <h3 className="font-display font-bold text-xl mb-4 text-rec-gold">
                  Our Vision
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  To be a globally recognized institution that nurtures
                  innovation, research, and technological advancement, producing
                  ethical leaders who contribute to societal progress and
                  national development.
                </p>
              </div>
              <div className="bg-rec-gold rounded-xl p-8 text-rec-navy">
                <h3 className="font-display font-bold text-xl mb-4 text-rec-navy">
                  Our Mission
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">›</span>
                    <span>
                      Provide quality technical education aligned with global
                      standards
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">›</span>
                    <span>
                      Foster research, innovation, and entrepreneurship among
                      students
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">›</span>
                    <span>
                      Cultivate professional ethics, leadership, and social
                      responsibility
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">›</span>
                    <span>
                      Forge strong industry partnerships for real-world exposure
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-rec-navy">
              Key Highlights
            </h2>
            <div className="w-16 h-1 bg-rec-gold mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl card-shadow p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-rec-navy flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-rec-gold" />
                </div>
                <h3 className="font-display font-bold text-rec-navy text-lg mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Accreditations */}
        <section className="bg-rec-navy py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-display font-bold text-2xl text-white text-center mb-7">
              Accreditations & Affiliations
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {accreditations.map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
