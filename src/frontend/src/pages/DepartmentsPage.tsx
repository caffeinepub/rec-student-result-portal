import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CircuitBoard,
  Cpu,
  Monitor,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const departments = [
  {
    id: 1,
    name: "Artificial Intelligence and Machine Learning",
    code: "AIML",
    icon: Cpu,
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    intake: "120",
    desc: "Explore intelligent systems, deep learning, neural networks, and data-driven solutions. This program prepares engineers for the AI revolution.",
    programs: ["B.E AIML", "M.E AIML"],
  },
  {
    id: 2,
    name: "Computer Science and Engineering",
    code: "CSE",
    icon: Monitor,
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    intake: "180",
    desc: "Build a strong foundation in algorithms, software engineering, cloud computing, and cybersecurity through rigorous academic training.",
    programs: ["B.E CSE", "M.E CSE", "Ph.D"],
  },
  {
    id: 3,
    name: "Information Technology",
    code: "IT",
    icon: Zap,
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    intake: "120",
    desc: "Focus on software development, web technologies, database management, and enterprise IT solutions with strong industry linkages.",
    programs: ["B.E IT"],
  },
  {
    id: 4,
    name: "Electronics and Communication Engineering",
    code: "ECE",
    icon: CircuitBoard,
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    intake: "120",
    desc: "Study signal processing, VLSI design, embedded systems, and wireless communications in fully-equipped electronics labs.",
    programs: ["B.E ECE", "M.E VLSI", "Ph.D"],
  },
  {
    id: 5,
    name: "Mechanical Engineering",
    code: "MECH",
    icon: Settings,
    color: "bg-red-50 border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    intake: "60",
    desc: "Design, manufacture, and analyze machines and systems — from thermodynamics to CAD/CAM — with hands-on workshop training.",
    programs: ["B.E Mechanical", "M.E Manufacturing", "Ph.D"],
  },
  {
    id: 6,
    name: "Electrical and Electronics Engineering",
    code: "EEE",
    icon: Users,
    color: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-700",
    intake: "60",
    desc: "Master power systems, electric machines, control engineering, and renewable energy for careers in the energy sector.",
    programs: ["B.E EEE", "M.E Power Electronics"],
  },
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="rec-gradient py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Departments
          </h1>
          <div className="w-24 h-1 bg-rec-gold mx-auto mb-5" />
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Six dynamic engineering departments delivering world-class
            education.
          </p>
        </div>
      </section>
      <div className="h-1.5 bg-rec-gold" />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  data-ocid={`departments.item.${idx + 1}`}
                  className={
                    "bg-white rounded-xl border card-shadow hover:card-shadow-lg transition-all duration-200 overflow-hidden flex flex-col"
                  }
                >
                  <div className="rec-gradient h-1.5" />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${dept.iconBg} flex items-center justify-center shrink-0`}
                      >
                        <Icon className={`h-6 w-6 ${dept.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          {dept.code}
                        </span>
                        <h3 className="font-display font-bold text-rec-navy text-base leading-tight mt-0.5">
                          {dept.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                      {dept.desc}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          Annual Intake
                        </span>
                        <span className="font-bold text-rec-navy">
                          {dept.intake} students
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {dept.programs.map((prog) => (
                          <span
                            key={prog}
                            className="px-2 py-0.5 rounded-full bg-rec-navy/8 text-rec-navy text-xs font-medium border border-rec-navy/15"
                          >
                            {prog}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-rec-navy/30 text-rec-navy hover:bg-rec-navy hover:text-white transition-colors gap-1.5 mt-1"
                      >
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
