import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/elements";

export const CategoryCard = () => {
  return(
      <Card className={'mb-2 group'}>
          <CardHeader>
              pic
          </CardHeader>
          <CardContent>
              <CardTitle className={'text-center mb-3 group-hover:text-primary'}>
                  دسته‌بندی موضوعات ۱
              </CardTitle>
              <CardDescription className={'text-center'}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </CardDescription>
          </CardContent>
      </Card>
  )
}