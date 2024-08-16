import {Form, FormControl, FormField, FormItem, FormMessage, Input} from "@/components/form";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Textarea} from "@/components/form/Textarea.tsx";
import {Button} from "@/components/elements";
import locationIcon from "@/assets/location.svg"
import phoneIcon from "@/assets/phone.svg"
import mailIcon from "@/assets/mail.svg"

const formSchema = z.object({
    username: z.string().min(2).max(50),
})
export const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className={'bg-gradient-to-r from-start-gradient to-end-gradient text-white'}>
            <div className={'grid lg:grid-cols-2 xl:w-[1150px] lg:w-[900px] mx-auto py-20 lg:py-32 gap-10 lg:gap-0'}>
                <div className={'mx-10 lg:mx-14'}>
                    <h3 className={'font-semibold text-2xl mb-4 lg:my-6'}>
                        تماس با ما
                    </h3>
                    <p className={'text-sm leading-6 mb-10   w-full text-justify'}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه.
                    </p>
                    <ul className={'space-y-6'}>
                        <li className={'flex gap-2 text-sm'}>
                            <img src={locationIcon as string}/>
                            بوشهر، خیابان ماهینی، پردیس فناوری دانشگاه خلیج فارس، شرکت رونیکا
                        </li>
                        <li className={'flex gap-2 text-sm'}>
                            <img src={phoneIcon as string}/>
                            <span dir={'ltr'}>
                                +۹۸ ۹۳۷ ۰۲۲ ۵۸۰۸
                            </span>
                        </li>
                        <li  className={'flex gap-2 text-sm'}>
                            <img src={mailIcon as string}/>
                            academy@thingspod.io
                        </li>
                    </ul>

                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className={'flex flex-col md:flex-row items-center w-full lg:gap-8 lg:mb-4'}>
                            <FormField
                                control={form.control}
                                name="username"

                                render={({field}) => (
                                    <FormItem
                                        className={'w-full px-4 lg:px-0 md:w-1/2'}
                                    >
                                        <FormControl>
                                            <Input className={''} placeholder="نام و نام خانوداگی*" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem
                                        className={'w-full px-4 lg:px-0 md:w-1/2'}
                                    >
                                        <FormControl>
                                            <Input placeholder="ایمیل*" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({field}) => (
                                <FormItem
                                className={'px-4 lg:px-0'}
                                >
                                    <FormControl>
                                        <Textarea
                                            placeholder="پیام شما..."
                                            className="resize-none  w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className={'flex justify-end w-full'}>
                            <Button className={'w-full mx-4 md:mx-0 md:w-32'}>ارسال</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}