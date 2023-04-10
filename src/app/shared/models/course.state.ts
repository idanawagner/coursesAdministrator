import { Course } from "./course";

export interface CourseState{
  courses: Array<Course>;
  loadingCourses: boolean;
}
