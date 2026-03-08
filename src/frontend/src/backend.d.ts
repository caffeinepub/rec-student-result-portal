import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Course {
    credits: bigint;
    name: string;
    grade: string;
    gradePoint: bigint;
}
export interface Student {
    courses: Array<Course>;
    semester: bigint;
    password: string;
    name: string;
    sgpa: number;
    registerNumber: string;
    academicYear: string;
    loginId: string;
    programme: string;
}
export type SessionToken = string;
export interface backendInterface {
    getStudentDetails(token: SessionToken): Promise<Student>;
    login(loginId: string, password: string): Promise<SessionToken>;
}
