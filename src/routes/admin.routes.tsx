import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-admin",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "/admin/create-admin",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminPaths = [
  {
    index: true, //if user hit /admin they will see this element
    element: <AdminDashboard />,
  },
  {
    path: "dashboard", //if user hit /admin/dashboard they will also see this element
    element: <AdminDashboard />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
];
