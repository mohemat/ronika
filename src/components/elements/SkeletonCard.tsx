import {Skeleton} from "@/components/Elements";
import {Card, CardContent, CardFooter, CardHeader} from "./Card";

export function SkeletonCard() {
    return (
        <Card>
            <CardHeader className="items-center">
                <Skeleton className="h-[180px] w-full rounded-lg"/>
            </CardHeader>

            <CardContent>
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-full mt-4"/>
            </CardContent>

            <CardFooter className="justify-between mx-4 mb-4">
                <Skeleton className="h-4 w-[70px]"/>
                <Skeleton className="h-4 w-[70px]"/>
            </CardFooter>
        </Card>
    );
}
