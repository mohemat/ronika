import emailBackground from "@/assets/emailBackground.svg";
import {useForm} from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {Button} from "@/components/elements"
import {Form, FormControl, FormField, FormItem, FormMessage, Input,} from "@/components/form"

const formSchema = z.object({
    username: z.string().min(2).max(50),
})

export const EmailForm = () => {

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
        <div
            className="w-full bg-no-repeat bg-center min-h-72 rounded-3xl mt-32"
            style={{
                backgroundImage: `url(${emailBackground})`,
                height: 'auto',
                // backgroundSize: 'cover', // Ensures the image covers the entire div

            }}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className="flex flex-col justify-center items-center h-full pt-6 md:pt-11">
                    <h3 className={'text-white font-semibold text-xl mb-8'}>لورم ایپسوم متن ساختگی</h3>
                    <div className={'flex flex-col sm:flex-row gap-2'}>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className={'w-96'} placeholder="ایمیل خود را وارد کنید" {...field} />
                                    </FormControl>
                                    <FormMessage className={'hidden sm:flex'}/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">عضویت</Button>
                    </div>
                    <p className={'text-white text-sm text-center sm:w-2/3 lg:w-1/2 mx-10 sm:mx-0 mt-6 md:mt-4'}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم صنعت چاپ، برای استفاده طراحان گرافیک است، چاپگرها
                        و متون بلکه روزنامه و مجله آنچنان که لازم است.
                    </p>
                </form>
            </Form>
        </div>
    )
}