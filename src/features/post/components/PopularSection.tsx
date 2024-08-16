import {Link} from "react-router-dom";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/elements"
import {PostCard} from "@/features/post";

export const PopularSection = () => {
    return (
        <div className={'mt-20'}>
            <div className={'flex items-center justify-between mb-6'}>
                <h3 className={'font-semibold'}>
                    محبوب ترین مطالب
                </h3>
                <Link className={'hidden sm:flex underline decoration-solid underline-offset-8 text-sm'} to={"/"}>نمایش بیشتر</Link>
            </div>

            <Tabs dir={'rtl'} defaultValue="all" className="w-full">
                <TabsList className={'w-full sm:w-auto'}>
                    <TabsTrigger value="all">همه</TabsTrigger>
                    <TabsTrigger value="section1">بخش 1</TabsTrigger>
                    <TabsTrigger value="section2">بخش 2</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <div className={'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}>
                        {Array.from({length: 4}).map(() => (
                            <PostCard/>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="section1">
                    <div className={'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}>
                        {Array.from({length: 4}).map(() => (
                            <PostCard/>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="section2">
                    <div className={'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}>
                        {Array.from({length: 4}).map(() => (
                            <PostCard/>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>

            <div className={'sm:hidden w-full text-center mt-8'}>
                <Link className={'underline decoration-solid underline-offset-8 text-sm'} to={"/"}>نمایش بیشتر</Link>
            </div>

        </div>
    )
}