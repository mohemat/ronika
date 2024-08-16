import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/elements";
import playIcon from "@/assets/play.svg"
import documentIcon from "@/assets/document.svg"
import {LikeButton} from "@/features/post";
export const PostCard = () => {
  return(
      <Card className={'mb-2 group'}>
          <CardHeader>
              <LikeButton/>
              pic
          </CardHeader>
          <CardContent>
              <span className={'text-xs text-primary'}>بخش ۱</span>
              <CardTitle className={'mb-3 group-hover:text-primary'}>
                  لورم ایپسوم متن ساختگی
              </CardTitle>
              <CardDescription className={'text-justify'}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم صنعت چاپ، برای استفاده طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.
              </CardDescription>
              <CardFooter className={'justify-between'}>
                  <span className={'text-xs'}>26 مشاهده</span>
                  <div className={'flex gap-3'}>
                      <img src={documentIcon as string}/>
                      <img src={playIcon as string}/>

                  </div>
              </CardFooter>
          </CardContent>
      </Card>
  )
}