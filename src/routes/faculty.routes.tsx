import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import FacultyInfo from "../pages/faculty/FacultyInfo";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Faculty Management",
    children: [
      {
        name: "Faculty Info",
        path: "faculty-info",
        element: <FacultyInfo />,
      },
    ],
  },
];
