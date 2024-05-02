import Image from "next/image";

import ImgArtist from "@/public/images/artistBg/m.svg"
import TitleImg from "@/public/images/micTitle.svg"

import Picture from "@/public/images/pictures/mik.png"


export default function Page() {
    return (
        <div className="flex flex-col items-center pt-20">
            <Image src={TitleImg} alt="name" className="max-sm:w-72"></Image>

            <div className="flex justify-center items-center py-14 gap-14 max-lg:flex-col">
                <Image src={ImgArtist} alt="artist" className="max-sm:w-56"></Image>
                <div className="w-4/12 space-y-6 max-lg:w-8/12">
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Дата и место рождения:</span> 
                        <span className="textMont font-semibold">6 марта 1475 г., Капрезе-Микеланджело, Италия</span>
                    </div>
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Дата и место смерти:</span> 
                        <span className="textMont font-semibold">18 февраля 1564 г., Рим, Италия</span>
                    </div>
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Периоды:</span> 
                        <span className="textMont font-semibold">
                            Возрождение, Итальянский Ренессанс, Маньеризм, Высокое Возрождение
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full px-52 pt-6 pb-28 max-lg:pb-11 max-lg:px-32 max-md:px-20 max-sm:px-4">
                <div className="flex justify-between">
                    <p className="text-2xl max-lg:hidden">XIII—XVI</p>
                    <div className="w-64 max-lg:w-full max-lg:m-auto border-2 border-black">
                        <div className="h-7 bg-black"></div>
                        <p className="text-sm textMont p-4">
                            Один из крупнейших мастеров эпохи Высокого Возрождения. Именно его считают подлинным «отцом барокко»
                        </p>
                    </div>
                </div>
                <div className="flex w-full max-lg:flex-col max-lg:items-center">
                    <div className="border border-black p-12 max-lg:p-8 w-1/2 max-lg:w-full flex flex-col">
                        <Image src={Picture} alt="picture" className="w-full object-cover pb-6"/>
                        <p className="text-6xl textMont max-sm:text-4xl">01 <span className="text-xl font-bold textMont max-sm:flex-wrap max-sm:flex max-sm:pt-3">Особенности творчества</span></p>
                        <p className="textMont pt-4">
                            В равной мере сочетая талант скульптора, живописца и 
                            мыслителя, Буонарроти создавал шедевры, исполненные скрытой 
                            страсти — все они посвящались красоте человека, как физической, 
                            так и духовной. Скульптурным и живописным произведениям Микеланджело
                            Буонарроти присущи драматизм образов, пластичность и вместе с тем 
                            сложность поз персонажей, монументализм и многоплановость образов.
                            Принадлежащие его перу мадригалы и сонеты являют собой образцы стихотворного 
                            искусства и посвящены таким философским темам, как счастье, любовь, одиночество. 
                            Часть из них еще при жизни гения была положена на музыку; 
                            стихотворения Микеланджело вдохновляли композиторов разных эпох вплоть до нашего времени.
                        </p>
                    </div>
                    <div className="border-r border-t border-b max-lg:border-l border-black p-12 max-lg:p-8 w-1/2  max-lg:w-full flex flex-col">
                        <p className="text-6xl textMont">02</p>
                        <p className="textMont pt-4">
                            Сегодня произведения Микеланджело Буонарроти украшают собой Лувр, 
                            собор св. Петра в Ватикане, Метрополитен-музей в Нью-Йорке, 
                            флорентийскую Академию изящных искусств, а также другие музеи и художественные галереи.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
