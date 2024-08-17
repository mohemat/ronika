import {Form, FormControl, FormField, FormItem, FormMessage, Input} from "@/components/form";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Textarea} from "@/components/form/Textarea.tsx";
import {Button} from "@/components/elements";
import locationIcon from "@/assets/location.svg"
import phoneIcon from "@/assets/phone.svg"
import mailIcon from "@/assets/mail.svg"
import {useCreateContactUs} from "@/features/contact";
import {MoonLoader} from "react-spinners";
import {toast} from "sonner";

const formSchema = z.object({
    fullname: z.string({required_error: "پر کردن این فیلد ضروری است.",}).min(2, {message: "پر کردن این فیلد ضروری است."}).max(256, {message: "نام نباید بیشتر از 256 کاراکتر باشد."}),
    email: z.string({required_error: "پر کردن این فیلد ضروری است.",}).min(2, {message: "پر کردن این فیلد ضروری است."}).max(320, {message: "ایمیل نباید بیشتر از 320 کاراکتر باشد."}).email({message: "ایمیل اشتباه است."}),
    message: z.string({required_error: "پر کردن این فیلد ضروری است.",}).min(2, {message: "پر کردن این فیلد ضروری است."}),
})
export const ContactForm = () => {
    const createContactUs = useCreateContactUs({
        mutationConfig: {
            onSuccess: () => {
                toast.success("پیام با موفقیت ارسال شد.")
                form.reset()
            }
        }
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        createContactUs.mutateAsync({
            data: {
                email: data.email,
                fullname: data.fullname,
                message: data.message
            }
        })
    }

    return (
        <div className={'bg-gradient-to-r from-start-gradient to-end-gradient'}>
            <div className={'grid lg:grid-cols-2 xl:w-[1150px] lg:w-[900px] mx-auto py-20 lg:py-32 gap-10 lg:gap-0'}>
                <div className={'mx-10 lg:mx-14  text-white'}>
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
                        <li className={'flex gap-2 text-sm'}>
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
                                name="fullname"

                                render={({field}) => (
                                    <FormItem
                                        className={'w-full px-4 lg:px-0 md:w-1/2'}
                                    >
                                        <FormControl>
                                            <Input type={'text'} placeholder="نام و نام خانوداگی*" {...field} />
                                        </FormControl>
                                        <FormMessage className={'pb-4 lg:pb-0'}/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem
                                        className={'w-full px-4 lg:px-0 md:w-1/2'}
                                    >
                                        <FormControl>
                                            <Input type={'text'} placeholder="ایمیل*" {...field} />
                                        </FormControl>
                                        <FormMessage className={'pb-4 lg:pb-0'}/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="message"
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
                                    <FormMessage className={'pb-4 lg:pb-0'}/>
                                </FormItem>
                            )}
                        />
                        <div className={'flex justify-end w-full'}>
                            <Button size={'lg'} disabled={createContactUs.isPending} className={'w-full space-x-2 mx-4 lg:mx-0 md:w-32'}>
                                {
                                    createContactUs.isPending ? <div className={'flex items-center gap-2'}>
                                        درحال ارسال
                                        <MoonLoader color={"white"} size={20} loading={createContactUs.isPending}/>
                                    </div> : "ارسال"
                                }
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}