import {MainLayout} from "@/components/layout";
import {BrowserRouter as Router} from "react-router-dom";
import * as React from "react";
import {CategorySection} from "@/features/category/components/CategorySection.tsx";
import {LatestSection, PopularSection} from "@/features/post";
import {EmailForm} from "@/features/email";
import {TestImage} from "@/features/home";

function App() {

    return (
        <Router>
            <MainLayout>
                <div className={'mt-4 mb-10'}>
                    <h3 className={'text-center font-semibold mb-4'}>
                        لورم ایپسوم متن ساختگی
                    </h3>
                    <p className={'flex mx-auto text-center text-sm w-full lg:w-[820px] leading-6'}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                </div>
                <CategorySection/>
                <PopularSection/>
                <LatestSection/>
                <EmailForm/>
                <TestImage/>
            </MainLayout>
        </Router>
    )
}

export default App
