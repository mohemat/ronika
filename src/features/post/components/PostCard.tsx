import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/elements";
import playIcon from "@/assets/play.svg"
import documentIcon from "@/assets/document.svg"
import {LikeButton} from "@/features/post";
import {API_URL} from "@/config";

interface PostCardProps {
    title: string;
    abstract: string;
    imageUrl: string;
    liked:boolean;
    views:number;
    section:string;
    postId:number;
}

export const PostCard = ({title, abstract, imageUrl, liked, views, section, postId}: PostCardProps) => {
    // const [loaded, setLoaded] = useState(false);
  return(
      <Card className={'mb-2 group'}>
          <CardHeader className={'space-y-0'}>
              <LikeButton postId={postId} liked={liked}/>
              {/*{!loaded && (*/}
              {/*    <Skeleton className="h-[186px] w-full rounded-xl"/>*/}
              {/*)}*/}
              <div className={'overflow-hidden rounded-lg'}>
                  <img
                      src={API_URL + imageUrl}
                      alt={title}
                      // className={`${!loaded ? 'hidden' : "visible transition-transform duration-300 ease-in-out group-hover:scale-105"}`}
                      className={'transition-transform w-full duration-300 ease-in-out group-hover:scale-105 mx-auto'}
                      // onLoad={() => setLoaded(true)}
                      loading={'lazy'}
                  />
              </div>

          </CardHeader>
          <CardContent>
              <span className={'text-xs text-primary'}>{section}</span>
              <CardTitle className={'mb-3 group-hover:text-primary mt-3'}>
                  {title}
              </CardTitle>
              <CardDescription className={'text-justify'}>
              {abstract}
              </CardDescription>
              <CardFooter className={'justify-between'}>
                  <span className={'text-xs'}>{views} مشاهده</span>
                  <div className={'flex gap-3'}>
                      <img src={documentIcon as string}/>
                      <img src={playIcon as string}/>
                  </div>
              </CardFooter>
          </CardContent>
      </Card>
  )
}