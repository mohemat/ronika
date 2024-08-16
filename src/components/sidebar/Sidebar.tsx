import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/sidebar";
import {MenuIcon} from "lucide-react";
import {NavLink} from "@/components/nav";

export const Sidebar = () => {
    return (
        <div className="flex items-center me-4 ms-auto lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <MenuIcon size={24}/>
                </SheetTrigger>
                <SheetContent
                    side={'left'}
                    className="w-[250px] sm:w-[300px] pt-14 "
                >
                    <ul>
                        <li>
                            <NavLink className={'justify-end'} to={'/'}>خانه</NavLink>
                        </li>
                        <li>
                            <NavLink className={'justify-end'} to={'/'}>لورم ایپسوم</NavLink>
                        </li>
                        <li>
                            <NavLink className={'justify-end'} to={'/'}>لورم ایپسوم</NavLink>
                        </li>
                        <li>
                            <NavLink className={'justify-end'} to={'/'}>لورم ایپسوم</NavLink>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    )
};