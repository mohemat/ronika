import {Link} from "react-router-dom";
import {SkeletonCard, Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/elements"
import {PostCard, usePopular, useSection} from "@/features/post";
import {useState} from "react";
import {convertSearchParamsToQuery} from "@/utils";

export const PopularSection = () => {
    const [section, setSection] = useState<null | number>(null)
    const paramsObject: { sectionId?:number; } = {};
    if (section) paramsObject.sectionId = section;
    const sectionsQuery = useSection({})
    const popularQuery = usePopular({
        searchQueries: convertSearchParamsToQuery(paramsObject),
    })


    return (
        <div className={'mt-20'}>
            <div className={'flex items-center justify-between mb-6'}>
                <h3 className={'font-semibold'}>
                    محبوب ترین مطالب
                </h3>
                <Link className={'hidden sm:flex underline decoration-solid underline-offset-8 text-sm'} to={"/"}>نمایش
                    بیشتر</Link>
            </div>

            <Tabs dir={'rtl'} defaultValue="all" className="w-full">
                <TabsList className={'w-full sm:w-auto'}>
                    <TabsTrigger onMouseDown={()=>  setSection(null)} value="all">همه</TabsTrigger>
                    {sectionsQuery.data?.data && sectionsQuery.data.data.map((section) => (
                        <TabsTrigger onMouseDown={()=>  setSection(section.id)} key={section.id}
                                     value={section.id.toString()}>{section.name}</TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="all">
                    <div className={'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}>
                        {popularQuery.isLoading &&
                            Array.from({length: 4}).map((_,i) => (
                                <SkeletonCard key={i}/>
                            ))
                        }
                        {popularQuery.data?.data.slice(0, 4).map((post) => (
                            <PostCard title={post.title} abstract={post.abstract} imageUrl={post.imgUrl}
                                      liked={post.liked} views={post.views} section={post.section.name} postId={post.id} key={post.id}/>
                        ))}

                    </div>
                </TabsContent>
                {sectionsQuery.data?.data && sectionsQuery.data.data.map((section) => (
                    <TabsContent key={section.id} value={section.id.toString()}>
                        <div className={'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}>
                            {popularQuery.isLoading &&
                                Array.from({length: 4}).map((_,index) => (
                                    <SkeletonCard key={index}/>
                                ))
                            }
                            {popularQuery.data?.data.map((post) => (
                                <PostCard title={post.title} abstract={post.abstract} imageUrl={post.imgUrl}
                                          liked={post.liked} views={post.views} section={post.section.name} postId={post.id} key={post.id}/>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            <div className={'sm:hidden w-full text-center mt-8'}>
                <Link className={'underline decoration-solid underline-offset-8 text-sm'} to={"/"}>نمایش بیشتر</Link>
            </div>

        </div>
    )
}