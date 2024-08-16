import {Link} from "react-router-dom";
import {PostCard} from "@/features/post";

export const LatestSection = () => {
    return (
        <div className={'mt-20'}>
            <div className={'flex items-center justify-between mb-6'}>
                <h3 className={'font-semibold'}>
                    آخرین مطالب
                </h3>
                <Link className={'hidden sm:flex underline decoration-solid underline-offset-8 text-sm'} to={"/"}>نمایش
                    بیشتر</Link>
            </div>

            <div className={'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}>
                {Array.from({length: 4}).map(() => (
                    <PostCard/>
                ))}
            </div>

            <div className={'sm:hidden w-full text-center mt-8'}>
                <Link className={'underline decoration-solid underline-offset-8 text-sm'} to={"/"}>نمایش بیشتر</Link>
            </div>

        </div>
    )
}