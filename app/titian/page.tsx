import Image from "next/image";

import ImgArtist from "@/public/images/artistBg/t.svg"
import TitleImg from "@/public/images/ticTitle.svg"

import Picture2 from "@/public/images/pictures/tic2.png"
import Picture3 from "@/public/images/pictures/tic3.png"


export default function Page() {
    return (
        <div className="flex flex-col items-center pt-20">
            <Image src={TitleImg} alt="name" className="max-sm:w-72"></Image>

            <div className="flex justify-center items-center py-14 gap-14 max-lg:flex-col">
                <Image src={ImgArtist} alt="artist" className="max-sm:w-56"></Image>
                <div className="w-4/12 space-y-6 max-lg:w-8/12">
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Дата и место рождения:</span> 
                        <span className="textMont font-semibold">Пьеве-ди-Кадоре, Италия</span>
                    </div>
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Дата и место смерти:</span> 
                        <span className="textMont font-semibold">27 августа 1576 г., Венеция, Италия</span>
                    </div>
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Периоды:</span> 
                        <span className="textMont font-semibold">
                            Возрождение, Итальянский Ренессанс, 
                            Венецианская школа живописи, Высокое Возрождение
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full px-52 pt-6 pb-28 max-lg:pb-11 max-lg:px-32 max-md:px-20 max-sm:px-8">
                <div className="flex justify-between">
                    <p className="text-2xl max-lg:hidden">XIII—XVI</p>
                    <div className="w-64 max-lg:w-full max-lg:m-auto border-2 border-black">
                        <div className="h-7 bg-black"></div>
                        <p className="text-sm textMont p-4">
                            Тициан был известен своим умением передавать человеческие эмоции и настроения через свои работы
                        </p>
                    </div>
                </div>

                <div className="flex w-full max-lg:flex-col max-lg:items-center">
                    <div className="border border-black p-12 max-lg:p-8 w-1/2 max-lg:w-full flex flex-col">
                        <Image src={Picture2} alt="picture" className="w-full object-cover pb-6"/>
                        <p className="text-6xl textMont max-sm:text-4xl">01 <span className="text-xl font-bold textMont max-sm:flex-wrap max-sm:flex max-sm:pt-3">Особенности творчества</span></p>
                        <p className="textMont pt-4">
                            Виртуозная работа с цветом, 
                            позволяющая изображать как тонкие душевные состояния на 
                            портретах, так и грандиозные драматические события на картинах 
                            с мифологическими или религиозными сюжетами, - для многих поколений 
                            художников "колорит Тициана" станет целью номер один; невиданная прежде 
                            психологическая глубина, достоверность, эмоциональность тициановских портретов; 
                            использование диагональной композиции для создания динамики в масштабных сценах.
                        </p>
                    </div>
                    <div className="border-r border-t border-b max-lg:border-l border-black p-12 max-lg:p-8 w-1/2  max-lg:w-full flex flex-col">
                        <Image src={Picture3} alt="picture" className="w-full object-cover pb-6"/>
                        <p className="text-6xl textMont">02</p>
                        <p className="textMont pt-4">
                            За более чем 70 лет творческого труда 
                            Тициану приходилось писать венецианских дожей и римских пап, 
                            герцогов и королей, но даже знатность заказчика никак не помогала 
                            ускорить работу. Известно раздражённое письмо герцога Альфонсо д`Эсте, 
                            переданное Тициану по дипломатическим каналам: «Художник Тициан вовсе не
                            считается с нами! Он играет скверную игру. Это для него плохо кончится!» 
                            Впрочем, когда герцог получил заказанную им аллегорию «Вакханалия» и оценил 
                            её совершенство, он пришёл в неистовый восторг. А почетное звание официального 
                            художника Тициану вернули – после того, как он всё-таки завершил 
                            батальную «Битву при Кадоре» (картина не сохранилась - погибла при пожаре).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
