import { ReactNode } from "react";

type TAdminRoute = { key: string; label: ReactNode; children?: TAdminRoute[] };
export const sidebarItemsGenerator = (items) => {
    const sidebarItems = items.reduce(
        (acc: TAdminRoute[], item) => {
            // condition for the without child
            if (item.path && item.name) {
                acc.push({
                    key: item.name,
                    label: <NavLink to={`/admin/${item.path}`}> { item.name } < /NavLink>,
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
            label: <NavLink to={`/admin/${child.path}`} > { child.name } < /NavLink>,
              })),
            });
          }

return acc;
        },
[]
      );
return sidebarItems
}