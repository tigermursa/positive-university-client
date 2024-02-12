import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
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



















/*
*** old code before utils function** 
export const adminSidebarItems = adminPaths.reduce(
  (acc: TAdminRoute[], item) => {
    // condition for the without child
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
    // condition for the with child
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        //for each return nothing map returns an array
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  },
  []
);

// Dynamic way with the power of js function
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  // condition for the without child
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  // condition for the with child
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);  */

//********
//hard coded routes

// export const adminPaths = [
//   {
//     index: true, //if user hit /admin they will see this element
//     element: <AdminDashboard />,
//   },
//   {
//     path: "dashboard", //if user hit /admin/dashboard they will also see this element
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
