import {
  BookOpen,
  CalendarDays,
  ClipboardList,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const ugPrograms = [
  {
    name: "B.E Artificial Intelligence and Machine Learning",
    years: "4 Years",
    intake: 120,
  },
  {
    name: "B.E Computer Science and Engineering",
    years: "4 Years",
    intake: 180,
  },
  { name: "B.E Information Technology", years: "4 Years", intake: 120 },
  {
    name: "B.E Electronics and Communication Engineering",
    years: "4 Years",
    intake: 120,
  },
  { name: "B.E Mechanical Engineering", years: "4 Years", intake: 60 },
  {
    name: "B.E Electrical and Electronics Engineering",
    years: "4 Years",
    intake: 60,
  },
];

const pgPrograms = [
  {
    name: "M.E Computer Science and Engineering",
    years: "2 Years",
    intake: 18,
  },
  { name: "M.E VLSI Design", years: "2 Years", intake: 18 },
  { name: "M.E Power Electronics and Drives", years: "2 Years", intake: 18 },
  { name: "M.E Manufacturing Engineering", years: "2 Years", intake: 18 },
];

const calendar = [
  {
    period: "June – October",
    event: "First Half (Theory Classes)",
    type: "academic",
  },
  {
    period: "October – November",
    event: "Internal Assessment Tests",
    type: "exam",
  },
  {
    period: "November – December",
    event: "End Semester Examinations (Odd Semester)",
    type: "exam",
  },
  { period: "December – January", event: "Winter Vacation", type: "holiday" },
  {
    period: "January – April",
    event: "Second Half (Theory Classes)",
    type: "academic",
  },
  {
    period: "April – May",
    event: "End Semester Examinations (Even Semester)",
    type: "exam",
  },
  { period: "May – June", event: "Summer Vacation", type: "holiday" },
];

const typeColor: Record<string, string> = {
  academic: "bg-blue-100 text-blue-700",
  exam: "bg-red-100 text-red-700",
  holiday: "bg-green-100 text-green-700",
};

export default function AcademicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="rec-gradient py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Academics
          </h1>
          <div className="w-24 h-1 bg-rec-gold mx-auto mb-5" />
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Rigorous, industry-aligned academic programmes for UG, PG, and
            Research scholars.
          </p>
        </div>
      </section>
      <div className="h-1.5 bg-rec-gold" />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {/* UG Programs */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rec-navy flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-rec-gold" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-rec-navy">
                  Undergraduate Programs
                </h2>
                <p className="text-sm text-muted-foreground">
                  4-Year B.E / B.Tech Programmes
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl card-shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-rec-navy/5 border-b border-border">
                      <th className="text-left px-6 py-3 text-xs font-bold text-rec-navy uppercase tracking-wide">
                        Programme
                      </th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-rec-navy uppercase tracking-wide">
                        Duration
                      </th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-rec-navy uppercase tracking-wide">
                        Intake
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ugPrograms.map((prog, i) => (
                      <tr
                        key={prog.name}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-6 py-3.5 text-sm font-semibold text-rec-navy">
                          {prog.name}
                        </td>
                        <td className="px-4 py-3.5 text-center text-sm text-muted-foreground">
                          {prog.years}
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <span className="font-bold text-rec-navy text-sm">
                            {prog.intake}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* PG Programs */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rec-navy flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-rec-gold" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-rec-navy">
                  Postgraduate Programs
                </h2>
                <p className="text-sm text-muted-foreground">
                  2-Year M.E / M.Tech Programmes
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl card-shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-rec-navy/5 border-b border-border">
                      <th className="text-left px-6 py-3 text-xs font-bold text-rec-navy uppercase tracking-wide">
                        Programme
                      </th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-rec-navy uppercase tracking-wide">
                        Duration
                      </th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-rec-navy uppercase tracking-wide">
                        Intake
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pgPrograms.map((prog, i) => (
                      <tr
                        key={prog.name}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                      >
                        <td className="px-6 py-3.5 text-sm font-semibold text-rec-navy">
                          {prog.name}
                        </td>
                        <td className="px-4 py-3.5 text-center text-sm text-muted-foreground">
                          {prog.years}
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <span className="font-bold text-rec-navy text-sm">
                            {prog.intake}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Research */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rec-navy flex items-center justify-center">
                <FlaskConical className="h-5 w-5 text-rec-gold" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-rec-navy">
                  Research Programs
                </h2>
                <p className="text-sm text-muted-foreground">Ph.D Programmes</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                "Computer Science and Engineering",
                "Electronics and Communication",
                "Mechanical Engineering",
              ].map((area) => (
                <div
                  key={area}
                  className="bg-white rounded-xl card-shadow p-5 border-l-4 border-rec-gold"
                >
                  <h3 className="font-semibold text-rec-navy text-sm">
                    {area}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Full-time and part-time Ph.D research under experienced
                    supervisors with access to advanced labs and funding
                    opportunities.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Examination Cell */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rec-navy flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-rec-gold" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-rec-navy">
                  Examination Cell
                </h2>
                <p className="text-sm text-muted-foreground">
                  Autonomous examination governance
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl card-shadow p-7 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-rec-navy mb-3">
                  Grading System
                </h3>
                <div className="space-y-2">
                  {[
                    ["O", "Outstanding", "10", "91–100"],
                    ["A+", "Excellent", "9", "81–90"],
                    ["A", "Very Good", "8", "71–80"],
                    ["B+", "Good", "7", "61–70"],
                    ["B", "Average", "6", "50–60"],
                    ["RA", "Reappearance", "0", "< 50"],
                  ].map(([grade, label, point, range]) => (
                    <div
                      key={grade}
                      className="flex items-center justify-between text-sm py-1.5 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-rec-navy text-white text-xs font-bold flex items-center justify-center">
                          {grade}
                        </span>
                        <span className="text-muted-foreground">{label}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-rec-navy">
                          {point} pts
                        </span>
                        <span className="text-muted-foreground ml-2 text-xs">
                          {range}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-rec-navy mb-3">
                  Continuous Assessment
                </h3>
                <div className="space-y-3">
                  {[
                    ["Internal Assessment Tests (2)", "20 marks"],
                    ["Model Examination", "10 marks"],
                    ["Assignments & Seminars", "10 marks"],
                    ["End Semester Examination", "60 marks"],
                  ].map(([item, marks]) => (
                    <div
                      key={item}
                      className="flex justify-between items-center text-sm py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-muted-foreground">{item}</span>
                      <span className="font-bold text-rec-navy">{marks}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Academic Calendar */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rec-navy flex items-center justify-center">
                <CalendarDays className="h-5 w-5 text-rec-gold" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-rec-navy">
                  Academic Calendar 2025–26
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-xl card-shadow overflow-hidden">
              {calendar.map((item, i) => (
                <div
                  key={item.period}
                  className={`flex items-center gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"} border-b border-gray-100 last:border-0`}
                >
                  <div className="w-36 shrink-0 text-xs font-semibold text-muted-foreground">
                    {item.period}
                  </div>
                  <div className="flex-1 text-sm font-medium text-rec-navy">
                    {item.event}
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold capitalize ${typeColor[item.type]}`}
                  >
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
