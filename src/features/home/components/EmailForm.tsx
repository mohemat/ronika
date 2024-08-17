import emailBackground from "@/assets/emailBackground.svg";
import {Button} from "@/components/elements"
import {Input,} from "@/components/form"

export const EmailForm = () => {

    return (
        <div
            className="w-full bg-no-repeat bg-center min-h-72 rounded-3xl mt-32"
            style={{
                backgroundImage: `url(${emailBackground})`,
                height: 'auto',
            }}>
            <div
                className="flex flex-col justify-center items-center h-full pt-6 md:pt-11">
                <h3 className={'text-white font-semibold text-xl mb-8'}>لورم ایپسوم متن ساختگی</h3>
                <div className={'flex flex-col sm:flex-row gap-2'}>
                    <Input className={'w-96'} placeholder="ایمیل خود را وارد کنید"/>
                    <Button size={'lg'} type="submit">عضویت</Button>
                </div>
                <p className={'text-white text-sm text-center sm:w-2/3 lg:w-1/2 mx-10 sm:mx-0 mt-6 md:mt-4'}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم صنعت چاپ، برای استفاده طراحان گرافیک است، چاپگرها
                    و متون بلکه روزنامه و مجله آنچنان که لازم است.
                </p>
            </div>
        </div>
    )
}