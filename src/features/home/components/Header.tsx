import headerImage from "@/assets/header.jpeg"
import {SearchPost} from "@/features/post";

export const Header = () => {
    return (
        <div
            className="h-[400px] md:h-[450px] w-full overflow-hidden bg-cover text-center"
            style={{
                backgroundImage: `url(${headerImage})`,
                backgroundPosition: 'center center',
            }}>
            <div
                className="h-full w-full bg-black/80">
                <div className="flex h-full items-center justify-center">
                    <div>
                        <h2 className="text-white mb-6 text-xl md:text-3xl font-bold">لورم ایپسوم ساختگی</h2>
                        <h4 className="text-white mb-10 text-sm md:text-lg ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h4>
                        <SearchPost/>
                    </div>
                </div>
            </div>
        </div>
    )
}