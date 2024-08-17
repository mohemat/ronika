import testImage from "@/assets/testImage.svg"
import {Button} from "@/components/elements";
export const TestImage = () => {
 return(
     <div className={'grid lg:grid-cols-2 gap-10 mx-0 xl:mx-12 my-32 '}>
         <img className={'mx-auto'} src={testImage as string} loading={'lazy'}/>
         <div>
             <h3 className={'font-semibold text-2xl'}>لورم ایپسوم متن ساختگی!</h3>
             <p className={'text-sm text-justify my-4'}>
                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
             </p>
             <div className={'flex gap-2'}>
                 <Button size={'lg'} type="submit">لورم ایپسوم</Button>
                 <Button size={'lg'} variant={'outline'} type="submit">لورم ایپسوم</Button>
             </div>
         </div>
     </div>
 )
}