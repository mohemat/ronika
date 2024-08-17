import {CategoryCard} from "@/features/category/components/CategoryCard.tsx";
import {useCategory} from "@/features/category";
import {SkeletonCard} from "@/components/elements";

export const CategorySection = () => {
    const categoriesQuery = useCategory({});

    if (categoriesQuery.isLoading) {
        return (
            <div className={'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'}>
                {Array.from({length: 5}).map((_, index) => (
                    <div
                        className={`col-span-2 ${index === 3 && "lg:col-start-2"} ${index === 4 && "sm:col-start-2 lg:col-start-auto"}`}
                        key={index}
                    >
                        <SkeletonCard key={index}/>
                    </div>
                ))}
            </div>
        )
    }

    if (!categoriesQuery.data?.data) return (
        <h4>No Category Found</h4>
    );

    return (
        <div className={'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'}>
            {categoriesQuery.data?.data.map((category, index) => (
                <div
                    className={`col-span-2 ${index === 3 && "lg:col-start-2"} ${index === 4 && "sm:col-start-2 lg:col-start-auto"}`}
                    key={index}
                >
                    <CategoryCard title={category.title} description={category.description} imageUrl={category.imgUrl}
                                  key={category.id}/>
                </div>
            ))}
        </div>
    )
}