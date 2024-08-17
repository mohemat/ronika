import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/elements";
import {API_URL} from "@/config";
interface CategoryCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export const CategoryCard = ({title, description, imageUrl}: CategoryCardProps) => {
    // const [loaded, setLoaded] = useState(false);

    return (
        <Card className={'mb-2 group'}>
            <CardHeader className={'items-center'}>
                {/*{!loaded && (*/}
                {/*    <Skeleton className="h-[186px] w-full rounded-xl"/>*/}
                {/*)}*/}
                <img
                    src={API_URL + imageUrl}
                    alt={title}
                    className={'w-full'}
                    // className={`${!loaded ? 'hidden' : "visible"}`}
                    // onLoad={() => setLoaded(true)}
                    loading={'lazy'}
                />
            </CardHeader>
            <CardContent>
                <CardTitle className={'text-center mb-3 group-hover:text-primary'}>
                    {title}
                </CardTitle>
                <CardDescription className={'text-center'}>
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}