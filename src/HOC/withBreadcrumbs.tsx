import { Outlet } from "react-router-dom";
import { RusEngTextType } from "../redux/store";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";

export const withBreadcrumbs = (Component: React.FC, breadcrumbs: RusEngTextType) => {
    return () => {
        useBreadcrumbs(breadcrumbs);
        return <div>
            <Component />
            <Outlet />
        </div>
    };
};