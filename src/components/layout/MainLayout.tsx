import * as React from "react";
import {Navbar} from "@/components/nav/Navbar.tsx";
import {Header} from "@/features/home";
import {ContactForm} from "@/features/contact";
import {Footer} from "@/components/footer";

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen" dir="rtl">
            <Navbar/>
            <Header/>
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 my-8">
                {children}
            </main>
            <ContactForm/>
            <Footer/>
        </div>
    );
};
