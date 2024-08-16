import {NavLink as NavigationLink, NavLinkProps} from "react-router-dom";
import {cn} from "@/utils/cn.ts";

export const NavLink = ({className, children, ...props}: NavLinkProps) => {
    return (
        <NavigationLink
            className={
                cn(
                    "text-sm flex items-center px-4 py-2 font-medium hover:text-primary",
                    className,
                )
            }
            {...props}
        >
            {children}
        </NavigationLink>
    );
};