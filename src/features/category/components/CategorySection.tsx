import {CategoryCard} from "@/features/category/components/CategoryCard.tsx";

export const CategorySection = () => {
    return (
        <div className={'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'}>
            {Array.from({length: 5}).map((_, index) => (
                <div className={`col-span-2 ${index === 3 && "lg:col-start-2"} ${index === 4 && "sm:col-start-2 lg:col-start-auto"}`}>
                    <CategoryCard key={index}/>
                </div>
            ))}
        </div>
    )
}