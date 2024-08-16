import logo from "@/assets/thingspodLogo.svg"
import logoBlack from "@/assets/thingspodLogoBlack.svg"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavLink,
} from "@/components/nav/index.ts"
import {useEffect, useState} from "react";
import {Sidebar} from "@/components/sidebar";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex fixed w-full py-3 z-10 transition-all duration-300 ${
                isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
            }`}
        >
            {isScrolled ?
                <img
                    src={logoBlack as string}
                    className={`absolute right-4 lg:right-10 top-2 lg:top-4 h-[29px] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
                    alt="تینگزپاد"
                />
                :
                <img
                    src={logo as string}
                    className={`absolute right-4 lg:right-10 top-2 lg:top-4 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
                    alt="تینگزپاد"
                />
            }


            <nav className={'hidden lg:flex mx-auto gap-8'}>
                <NavLink to={'/'}>خانه</NavLink>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={isScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-white'}>لورم
                                ایپسوم</NavigationMenuTrigger>
                            <NavigationMenuContent dir={'rtl'} className={'w-48 p-2'}>
                                <NavLink className={'py-3'} to={'/'}>لورم ایپسوم ساختگی ۱</NavLink>
                                <NavLink className={'py-3'} to={'/'}>لورم ایپسوم ساختگی ۲</NavLink>
                                <NavLink className={'py-3'} to={'/'}>لورم ایپسوم ساختگی ۳</NavLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavLink to={'/'}>لورم ایپسوم</NavLink>
                <NavLink to={'/'}>لورم ایپسوم</NavLink>
                <NavLink to={'/'}>لورم ایپسوم</NavLink>
            </nav>
            <Sidebar/>
        </div>
    );
};
