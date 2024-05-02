
import Image from "next/image"

import LeoImg from "@/public/images/artists/leo.svg"
import RaftImg from "@/public/images/artists/raf.svg"
import TictImg from "@/public/images/artists/tic.svg"
import MiktImg from "@/public/images/artists/mik.svg"

import Leo1 from "@/public/images/pictures/leo.png"
import Leo2 from "@/public/images/pictures/leo2.png"
import Mik from "@/public/images/pictures/mik.png"
import Raf from "@/public/images/pictures/raf.png"
import Raf2 from "@/public/images/pictures/raf2.png"
import Tic from "@/public/images/pictures/tic.png"
import Tic2 from "@/public/images/pictures/tic2.png"
import Tic3 from "@/public/images/pictures/tic3.png"
import Pictures from "./pictures"



export default function ArtistComponent() {
    return (
        <div className="gap-36 flex flex-col px-83 w-3/4 m-auto max-sm:gap-24">
            <div>
                <div className="flex max-xl:flex-col max-xl:gap-8 gap-1 m-auto justify-center pr-4 max-xl:border-none border-r border-black">
                    <div className="text-8xl font-semibold max-xl:text-6xl hidden max-xl:flex max-sm:justify-end">01</div>
                    <Image src={MiktImg} alt="Artist" className="max-xl:hidden"/>
                    <div className="w-60">
                        <p className="text-3xl font-semibold">Буонарроти</p>
                        <p className="text-5xl font-bold text-orange-600 max-sm:text-4xl">Микеланджело</p>
                        <p className="max-sm:float-right pt-4">Итальянский скульптор</p>
                    </div>
                    <Image src={MiktImg} alt="Artist" className="hidden max-xl:flex m-auto"/>
                    <div className="w-96 flex items-end max-xl:w-10/12 relative">
                        <p className="border-l border-black pl-4 max-xl:mt-8 m-auto absolute bottom-0 max-sm:static">
                            Единственное произведение 
                            Микеланджело в России — это эрмитажный «Скорчившийся мальчик». 
                            Небольшая незаконченная скульптура предназначалась для капеллы Медичи, но та не 
                            была достроена и в итоге произведение было куплено Екатериной II у итальянского банкира.
                        </p>
                    </div>
                    <div className="text-8xl font-semibold max-xl:text-6xl max-xl:hidden">01</div>
                </div>
                <div className="flex flex-wrap justify-center items-end gap-5 pt-20">
                    <Pictures picture={Mik} title="“Скорчившийся мальчик”"/>
                </div>
            </div>


            <div>
                <div className="flex max-xl:flex-col flex-row-reverse max-xl:gap-8 m-auto justify-center pl-4 max-xl:border-none border-l border-black">
                    <div className="text-8xl font-semibold max-xl:text-6xl hidden max-xl:flex max-sm:justify-end">02</div>
                    <Image src={LeoImg} alt="Artist" className="max-xl:hidden"/>
                    <div className="w-72 max-sm:w-60">
                        <p className="text-3xl font-semibold">Леонардо</p>
                        <p className="text-5xl font-bold text-orange-600">Да Винчи</p>
                        <p className="max-sm:float-right pt-4">Итальянский художник</p>
                    </div>
                    <Image src={LeoImg} alt="Artist" className="hidden max-xl:flex m-auto"/>
                    <div className="w-96 flex items-end max-xl:w-10/12 relative">
                        <p className="border-l border-black pl-4 max-xl:mt-8 m-auto absolute bottom-0 max-sm:static">
                            Да, один из самых известных художников в мире, чье имя знает любой ребенок, 
                            представлен в Эрмитаже. Считается, что сохранилось около 15 картин, написанных 
                            Леонардо да Винчи помимо фресок и рисунков. Две из них хранятся в Петербурге: 
                            «Мадонна Литта» и «Мадонна Бенуа». Конечно, споры об атрибуции все ещё возникают, 
                            но Эрмитаж настаивает на авторстве да Винчи, а у нас нет причин им не доверять.
                        </p>
                    </div>
                    <div className="text-8xl font-semibold max-xl:text-6xl max-xl:hidden">02</div>
                </div>

                <div className="flex flex-wrap justify-center items-end gap-5 pt-20">
                    <Pictures picture={Leo1} title="“Мадонна Литта”"/>
                    <Pictures picture={Leo2} title="“Мадонна Бенуа”"/>
                </div>
            </div>


            <div>
                <div className="flex max-xl:flex-col max-xl:gap-8 m-auto justify-center pr-4 max-xl:border-none border-r border-black">
                    <div className="text-8xl font-semibold max-xl:text-6xl hidden max-xl:flex max-sm:justify-end">03</div>
                    <Image src={RaftImg} alt="Artist" className="max-xl:hidden"/>
                    <div className="w-60">
                        <p className="text-3xl font-semibold">Санти</p>
                        <p className="text-5xl font-bold text-orange-600">Рафаэль</p>
                        <p className="max-sm:float-right pt-4">Итальянский живописец</p>
                    </div>
                    <Image src={RaftImg} alt="Artist" className="hidden max-xl:flex m-auto"/>
                    <div className="w-96 flex items-end max-xl:w-10/12 relative">
                        <p className="border-l border-black pl-4 max-xl:mt-8 m-auto absolute bottom-0 max-sm:static">
                            Да, один из самых известных художников в мире, чье имя знает любой ребенок, 
                            представлен в Эрмитаже. Считается, что сохранилось около 15 картин, написанных 
                            Леонардо да Винчи помимо фресок и рисунков. Две из них хранятся в Петербурге: 
                            «Мадонна Литта» и «Мадонна Бенуа». Конечно, споры об атрибуции все ещё возникают, 
                            но Эрмитаж настаивает на авторстве да Винчи, а у нас нет причин им не доверять.
                        </p>
                    </div>
                    <div className="text-8xl font-semibold max-xl:text-6xl max-xl:hidden">03</div>
                </div>

                <div className="flex flex-wrap justify-center items-end gap-5 pt-20">
                    <Pictures picture={Raf} title="“Мадонна Конестабиле”"/>
                    <Pictures picture={Raf2} title="“Мадонна с безбородым Иосифом”"/>
                </div>
            </div>


            <div>
                <div className="flex max-xl:flex-col flex-row-reverse max-xl:gap-8 m-auto justify-center pl-4 max-xl:border-none border-l border-black">
                    <div className="text-8xl font-semibold max-xl:text-6xl hidden max-xl:flex max-sm:justify-end">04</div>
                    <Image src={TictImg} alt="Artist" className="max-xl:hidden"/>
                    <div className="w-60">
                        <p className="text-3xl font-semibold">Вечеллио</p>
                        <p className="text-5xl font-bold text-orange-600">Тициан</p>
                        <p className="max-sm:float-right pt-4">Итальянский живописец</p>
                    </div>
                    <Image src={TictImg} alt="Artist" className="hidden max-xl:flex m-auto"/>
                    <div className="w-96 flex items-end max-xl:w-10/12 relative">
                        <p className="border-l border-black pl-4 max-xl:mt-8 m-auto absolute bottom-0 max-sm:static">
                            Согласно сайту Эрмитажа, музею принадлежит 10 произведений титана 
                            Возрождения! Шок, сенсация! Некоторые из них на реставрации,
                            тем не менее всегда можно увидеть «Данаю», «Марию Магдалину» и «Святого Себастьяна». 
                            Причем последние два полотна невероятно сильные по экспрессии и эмоциям.
                        </p>
                    </div>
                    <div className="text-8xl font-semibold max-xl:text-6xl max-xl:hidden">04</div>
                </div>

                <div className="flex flex-wrap justify-center items-end gap-5 pt-20">
                    <Pictures picture={Tic} title="“Мария Магдалина”"/>
                    <Pictures picture={Tic2} title="“Святой Себастьян”"/>
                    <Pictures picture={Tic3} title="“Даная”"/>
                </div>
            </div>
        </div>
    );
}
