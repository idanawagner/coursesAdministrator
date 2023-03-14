import { Course } from "./course";

export interface Student{
    idStudent:string;
    name: string;
    lastName: string;
    age: number;
    courseEnrolled?: Course;
    isActive: boolean;
}
