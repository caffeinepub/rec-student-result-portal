import {
  AlertCircle,
  CalendarDays,
  ClipboardList,
  Download,
  FileText,
} from "lucide-react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function ExaminationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="rec-gradient py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Examination Cell
          </h1>
          <div className="w-24 h-1 bg-rec-gold mx-auto mb-5" />
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Transparent, fair, and autonomous examination processes aligned with
            Anna University standards.
          </p>
        </div>
      </section>
      <div className="h-1.5 bg-rec-gold" />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          {/* Quick Links */}
          <section>
            <h2 className="font-display font-bold text-2xl text-rec-navy mb-6">
              Quick Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: FileText,
                  label: "Hall Ticket Download",
                  desc: "Download your admit card before the exam",
                },
                {
                  icon: ClipboardList,
                  label: "Results Portal",
                  desc: "View semester results and SGPA/CGPA",
                },
                {
                  icon: Download,
                  label: "Grade Sheets",
                  desc: "Download official grade transcripts",
                },
                {
                  icon: CalendarDays,
                  label: "Exam Schedule",
                  desc: "View upcoming exam timetables",
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl card-shadow p-6 hover:card-shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="w-11 h-11 rounded-lg bg-rec-navy flex items-center justify-center mb-4 group-hover:bg-rec-gold transition-colors">
                    <Icon className="h-5 w-5 text-rec-gold group-hover:text-rec-navy transition-colors" />
                  </div>
                  <h3 className="font-semibold text-rec-navy text-sm mb-1">
                    {label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Notices */}
          <section>
            <h2 className="font-display font-bold text-2xl text-rec-navy mb-6">
              Examination Notices
            </h2>
            <div className="bg-white rounded-xl card-shadow overflow-hidden">
              {[
                {
                  date: "15 Jan 2026",
                  title: "III Semester End Semester Results Declared",
                  type: "Result",
                  badge: "bg-green-100 text-green-700",
                },
                {
                  date: "10 Jan 2026",
                  title: "IV Semester Hall Ticket Download Open",
                  type: "Hall Ticket",
                  badge: "bg-blue-100 text-blue-700",
                },
                {
                  date: "28 Dec 2025",
                  title: "Revaluation Application Window – Nov/Dec 2025",
                  type: "Revaluation",
                  badge: "bg-yellow-100 text-yellow-700",
                },
                {
                  date: "05 Dec 2025",
                  title: "Arrear Examination Schedule Released",
                  type: "Schedule",
                  badge: "bg-purple-100 text-purple-700",
                },
              ].map((notice, i) => (
                <div
                  key={notice.date}
                  className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"} border-b border-gray-100 last:border-0`}
                >
                  <div className="w-14 shrink-0 text-xs text-muted-foreground font-medium">
                    {notice.date}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-rec-navy">
                      {notice.title}
                    </p>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${notice.badge}`}
                  >
                    {notice.type}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Important Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">
                Student Result Portal
              </h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                Students can login to the Student Result Portal using their
                registered email ID and register number to view their semester
                results. For any discrepancies, contact the Examination Cell
                within 7 days of result publication.
              </p>
              <a
                href="/"
                className="inline-block mt-3 text-sm font-bold text-rec-navy underline hover:text-rec-gold"
              >
                Go to Student Login →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
