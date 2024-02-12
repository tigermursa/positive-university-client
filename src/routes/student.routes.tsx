
export const studentPaths = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <AdminDashboard />,
    },
    {
      name: "User Management",
      children: [
        {
          name: "Create Admin",
          path: "create-admin",
          element: <CreateAdmin />,
        },
        {
          name: "Create Faculty",
          path: "create-faculty",
          element: <CreateFaculty />,
        },
        {
          name: "Create Student",
          path: "create-student",
          element: <CreateStudent />,
        },
      ],
    },
  ];