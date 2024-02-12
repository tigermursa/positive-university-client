const arr = [1, 2, 3];

const res = arr.reduce((acc, item) => {
  acc.push(acc + item);
  return acc;
}, []);

console.log(res);

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NAV_LINK",
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        key: item.name,
        label: child.element,
        //for each return nothing map returns an array
        children: item.children.map((child) => ({
          key: child.name,
          label: "NAV_LINK",
        })),
      });
    });
  }

  return acc;
}, []);

console.log(newArray);
