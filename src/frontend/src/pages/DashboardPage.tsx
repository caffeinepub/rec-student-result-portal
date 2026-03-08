import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  GraduationCap,
  LogOut,
  Printer,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { Student } from "../backend.d.ts";
import Footer from "../components/shared/Footer";
import { useActor } from "../hooks/useActor";

interface DashboardPageProps {
  sessionToken: string;
  onLogout: () => void;
}

const FALLBACK_STUDENT = {
  name: "Yashwanth C",
  registerNumber: "241501251",
  programme: "B.E Artificial Intelligence and Machine Learning",
  academicYear: "2025 – 2026",
  semester: 3n,
  sgpa: 8.3,
  loginId: "yashwanth.c.2024.aiml@rajalakshmi.edu.in",
  password: "",
  courses: [
    {
      name: "Design and Analysis of Algorithms",
      grade: "A",
      gradePoint: 9n,
      credits: 4n,
    },
    {
      name: "Database Management Systems",
      grade: "A",
      gradePoint: 9n,
      credits: 5n,
    },
    {
      name: "Object Oriented Programming using Java",
      grade: "A+",
      gradePoint: 10n,
      credits: 4n,
    },
    {
      name: "Fundamentals of Machine Learning",
      grade: "A",
      gradePoint: 9n,
      credits: 4n,
    },
    {
      name: "Environmental Science and Engineering",
      grade: "A",
      gradePoint: 9n,
      credits: 0n,
    },
    {
      name: "Probability and Inferential Statistics",
      grade: "A",
      gradePoint: 9n,
      credits: 4n,
    },
    {
      name: "Discrete Mathematics for AI",
      grade: "A",
      gradePoint: 9n,
      credits: 4n,
    },
  ],
};

const gradeColorMap: Record<string, string> = {
  O: "bg-purple-100 text-purple-800 border-purple-200",
  "A+": "bg-green-100 text-green-800 border-green-200",
  A: "bg-blue-100 text-blue-800 border-blue-200",
  "B+": "bg-yellow-100 text-yellow-800 border-yellow-200",
  B: "bg-orange-100 text-orange-800 border-orange-200",
};

const getGradeColor = (grade: string) =>
  gradeColorMap[grade] ?? "bg-gray-100 text-gray-800 border-gray-200";

export default function DashboardPage({
  sessionToken,
  onLogout,
}: DashboardPageProps) {
  const [student, setStudent] = useState<Student | null>(null);
  const { actor, isFetching } = useActor();

  useEffect(() => {
    if (!actor || isFetching || !sessionToken) return;
    actor
      .getStudentDetails(sessionToken)
      .then((s) => setStudent(s))
      .catch(() => setStudent(null));
  }, [actor, isFetching, sessionToken]);

  const data = student ?? FALLBACK_STUDENT;
  const semesterNum =
    typeof data.semester === "bigint" ? Number(data.semester) : data.semester;

  const semLabel = `${semesterNum}${semesterNum === 1 ? "st" : semesterNum === 2 ? "nd" : semesterNum === 3 ? "rd" : "th"} Semester`;

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Dashboard Header */}
      <header className="rec-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/assets/generated/rec-logo-transparent.dim_120x120.png"
                alt="REC Logo"
                className="h-16 w-16 object-contain shrink-0"
              />
              <div>
                <h1 className="font-display font-bold text-xl md:text-2xl text-white leading-tight">
                  Rajalakshmi Engineering College
                </h1>
                <p className="text-blue-200 text-xs mt-0.5">
                  Autonomous Institution | Affiliated to Anna University
                </p>
                <p className="text-blue-200 text-xs">
                  Approved by AICTE | NAAC A++ Accredited
                </p>
              </div>
            </div>
            <Button
              onClick={onLogout}
              data-ocid="dashboard.logout_button"
              variant="outline"
              className="self-start border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
        {/* Gold strip */}
        <div className="h-1 bg-rec-gold" />
      </header>

      {/* Sub navigation breadcrumb */}
      <div className="bg-white border-b border-border py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-rec-navy font-medium">Student Portal</span>
          <span>/</span>
          <span>Examination Results</span>
          <span>/</span>
          <span className="text-rec-gold font-semibold">III Semester</span>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 space-y-6">
        {/* Student Details Card */}
        <div
          data-ocid="dashboard.student.card"
          className="bg-white rounded-xl card-shadow overflow-hidden"
        >
          <div className="rec-gradient px-6 py-3 flex items-center gap-2">
            <User className="h-4 w-4 text-rec-gold" />
            <h2 className="font-semibold text-white text-sm uppercase tracking-wide">
              Student Information
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "Student Name", value: data.name, icon: User },
              {
                label: "Register Number",
                value: data.registerNumber,
                icon: Award,
              },
              {
                label: "Programme",
                value: data.programme,
                icon: GraduationCap,
              },
              {
                label: "Academic Year",
                value: data.academicYear,
                icon: Calendar,
              },
              { label: "Semester", value: semLabel, icon: BookOpen },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-rec-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="h-4 w-4 text-rec-navy" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-rec-navy mt-0.5">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result Summary Card */}
        <div
          data-ocid="dashboard.result.card"
          className="bg-white rounded-xl card-shadow overflow-hidden"
        >
          <div className="rec-gradient px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-rec-gold" />
              <h2 className="font-semibold text-white text-sm uppercase tracking-wide">
                Examination Result
              </h2>
            </div>
            <Badge className="bg-green-500/20 text-green-300 border border-green-400/30 hover:bg-green-500/20 text-xs gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Result Declared
            </Badge>
          </div>

          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-rec-navy text-lg">
                  B.E / B.Tech ACY 2025-26 ODD – 3rd Semester
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  November / December 2025 Examinations
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center bg-rec-navy/5 rounded-xl px-6 py-3 border border-rec-navy/20">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    SGPA
                  </p>
                  <p className="font-display font-bold text-3xl text-rec-navy">
                    {data.sgpa.toFixed(1)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    out of 10.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Results Table */}
        <div className="bg-white rounded-xl card-shadow overflow-hidden">
          <div className="rec-gradient px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-rec-gold" />
              <h2 className="font-semibold text-white text-sm uppercase tracking-wide">
                Course-wise Results
              </h2>
            </div>
            <Button
              onClick={handlePrint}
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent gap-2 text-xs"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Download
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table data-ocid="dashboard.results.table">
              <TableHeader>
                <TableRow className="bg-rec-navy/5 hover:bg-rec-navy/5">
                  <TableHead className="text-rec-navy font-bold text-xs uppercase tracking-wide w-14 text-center">
                    S.No
                  </TableHead>
                  <TableHead className="text-rec-navy font-bold text-xs uppercase tracking-wide">
                    Course Name
                  </TableHead>
                  <TableHead className="text-rec-navy font-bold text-xs uppercase tracking-wide text-center w-24">
                    Credits
                  </TableHead>
                  <TableHead className="text-rec-navy font-bold text-xs uppercase tracking-wide text-center w-28">
                    Grade
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.courses.map((course, idx) => (
                  <TableRow
                    key={course.name}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/80"}
                  >
                    <TableCell className="text-center text-muted-foreground text-sm">
                      {idx + 1}
                    </TableCell>
                    <TableCell className="font-medium text-sm text-rec-navy">
                      {course.name}
                    </TableCell>
                    <TableCell className="text-center text-sm text-muted-foreground">
                      {course.credits.toString()}
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getGradeColor(course.grade)}`}
                      >
                        {course.grade}
                        {course.gradePoint > 0n && (
                          <span className="ml-1 opacity-60">
                            ({course.gradePoint.toString()})
                          </span>
                        )}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="px-6 py-4 border-t border-border bg-rec-navy/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Total Credits: </span>
                <span className="font-bold text-rec-navy">
                  {data.courses.reduce((s, c) => s + Number(c.credits), 0)}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Courses: </span>
                <span className="font-bold text-rec-navy">
                  {data.courses.length}
                </span>
              </div>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">SGPA: </span>
              <span className="font-display font-bold text-xl text-rec-navy">
                {data.sgpa.toFixed(1)}
              </span>
              <span className="text-muted-foreground text-xs ml-1">/ 10.0</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
