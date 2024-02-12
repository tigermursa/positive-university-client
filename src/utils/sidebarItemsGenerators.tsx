import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const sidebarItemsGenetor = (items: TUserPath[], role: string) => {
  const adminSidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    // condition for the without child
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
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
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return adminSidebarItems;
};
