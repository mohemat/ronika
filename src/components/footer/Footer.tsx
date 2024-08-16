import thingspodLogoBlack from "@/assets/thingspodLogoBlack.svg"
import youtubeLogo from "@/assets/youtube.svg"
import aparatLogo from "@/assets/aparat.svg"
import instagramLogo from "@/assets/instagram.svg"
import linkedinLogo from "@/assets/linkedin.svg"
import telegramLogo from "@/assets/telegram.svg"
import locationBlackIcon from "@/assets/locationBlack.svg"
import phoneIconBlack from "@/assets/phoneBlack.svg";
import mailIconBlack from "@/assets/mailBlack.svg";

export const Footer = () => {
    return (
        <footer>
            <div className={'flex flex-col md:flex-row justify-center gap-14 md:gap-52 my-14'}>
                <div className={'mx-auto text-center md:mx-0 md:text-right'}>
                    <img src={thingspodLogoBlack as string} className={'mb-4 mx-auto md:mx-0'} alt={'things pod'}/>
                    <span className={'text-xs '}>
                        قدرت گرفته از Thingsboard
                    </span>
                    <div className={'flex gap-4 mt-8'}>
                        <img src={telegramLogo as string} alt={'telegram'}/>
                        <img src={linkedinLogo as string} alt={'linkedin'}/>
                        <img src={instagramLogo as string} alt={'instagram'}/>
                        <img src={aparatLogo as string} alt={'aparat'}/>
                        <img src={youtubeLogo as string} alt={'youtube'}/>
                    </div>
                </div>
                <div className={'space-y-4 mx-auto md:mx-0'}>
                    <div className={'flex items-start gap-3'}>
                        <img src={locationBlackIcon as string} alt={'location'}/>
                        <div className={'flex flex-col text-sm gap-1'}>
                          <span>
                              بوشهر، خیابان ماهینی، پردیس فناوری
                          </span>
                            <span>
                              دانشگاه خلیج فارس، شرکت رونیکا
                          </span>
                        </div>
                    </div>
                    <div className={'flex gap-2 text-sm justify-center md:justify-start'}>
                        <img src={phoneIconBlack as string} alt={'phone'}/>
                        <span dir={'ltr'}>
                                +۹۸ ۹۳۷ ۰۲۲ ۵۸۰۸
                            </span>
                    </div>
                    <div className={'flex gap-2 text-sm justify-center md:justify-start'}>
                        <img src={mailIconBlack as string} alt={'mail'}/>
                        <span>
                               lorem@ipsumlorem.io
                            </span>
                    </div>
                </div>
            </div>
            <div className={'text-center text-xs mb-6 mx-10'}>
                تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت ارتباط صنعت رونیکا پارس می‌باشد و هرگونه کپی‌برداری پیگرد قانونی دارد
            </div>
        </footer>
    )
}