import StudentDashboard from "../pages/student/StudentDashboard";
import StudentInfo from "../pages/student/StudentInfo";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Student Management",
    children: [
      {
        name: "Student Info",
        path: "student-info",
        element: <StudentInfo />,
      },
    ],
  },
];
