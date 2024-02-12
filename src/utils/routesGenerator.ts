import { ReactNode } from "react";

type TRoute = { path: string; element: ReactNode };
type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
}
export const routeGenerator = (items: TUserPath[]) => {
    // Dynamic way with the power of js function
    const routes = items.reduce((acc: TRoute[], item) => {
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
                    path: child.path!, // ! because we know that won't be undefine
                    element: child.element,
                });
            });
        }

        return acc;
    }, []);

    return routes;
}