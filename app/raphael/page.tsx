import Image from "next/image";

import ImgArtist from "@/public/images/artistBg/r.svg"
import TitleImg from "@/public/images/rafTitle.svg"

import Picture2 from "@/public/images/pictures/raf.png"
import Picture3 from "@/public/images/pictures/raf2.png"


export default function Page() {
    return (
        <div className="flex flex-col items-center pt-20">
            <Image src={TitleImg} alt="name" className="max-sm:w-72"></Image>

            <div className="flex justify-center items-center py-14 gap-14 max-lg:flex-col">
                <Image src={ImgArtist} alt="artist" className="max-sm:w-56"></Image>
                <div className="w-4/12 space-y-6 max-lg:w-8/12">
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Дата и место рождения:</span> 
                        <span className="textMont font-semibold">1483 г., Урбино, Италия</span>
                    </div>
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Дата и место смерти:</span> 
                        <span className="textMont font-semibold">6 апреля 1520 г., Рим, Италия</span>
                    </div>
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Периоды:</span> 
                        <span className="textMont font-semibold">
                            Возрождение, Итальянский Ренессанс, Высокое Возрождение
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
                            Рафаэль Санти считается одним из трех столпов Высокого Возрождения, наряду с Да Винчи и Микеланджело.
                        </p>
                    </div>
                </div>
                
                <div className="flex w-full max-lg:flex-col max-lg:items-center">
                    <div className="border border-black p-12 max-lg:p-8 w-1/2 max-lg:w-full flex flex-col">
                        <Image src={Picture3} alt="picture" className="w-full object-cover pb-6"/>
                        <p className="text-6xl textMont max-sm:text-4xl">01 <span className="text-xl font-bold textMont max-sm:flex-wrap max-sm:flex max-sm:pt-3">Особенности творчества</span></p>
                        <p className="textMont pt-4">
                            Имя Рафаэля давно стало синонимом гармонии. Его произведения 
                            – воплощение красоты, меры, ясности, естественности. Искусство Рафаэля, 
                            чуждое трагического мироощущения Микеланджело и интеллектуально-аналитического
                            подхода Леонардо да Винчи, воплощает высокие гуманистические представления о
                            совершенном мире и прекрасном человеке в гармонии его духовных и телесных сил.
                        </p>
                    </div>
                    <div className="border-r border-t border-b max-lg:border-l border-black p-12 max-lg:p-8 w-1/2  max-lg:w-full flex flex-col">
                        <Image src={Picture2} alt="picture" className="w-full object-cover pb-6"/>
                        <p className="text-6xl textMont">02</p>
                        <p className="textMont pt-4">
                            Популярным способом восславить картины
                            Рафаэля Санти стали сонеты. Как только «апостол гармонии» 
                            заканчивал новый шедевр, на дверь его дома или помещения, где произведение 
                            выставлялось, приколачивались листки с восторженными стихами, причём сочиняли 
                            их не только пылкие юноши, но и чуждые сантиментов, закалённые жизнью и политическими 
                            интригами мужи. Известный болонский художник Франческо Франча, который был намного старше
                            Рафаэля, по-детски радовался, если тот дарил ему свой рисунок (рисовальщиком Рафаэль был 
                            великолепным, даже просто копировать его почиталось за счастье) и тоже однажды прислал в 
                            благодарность сонет. «Счастлив юноша, что так рано вознёсся на подобную высоту, – констатировал 
                            Франча и риторически вопрошал: – 
                            кто может предсказать, какого величия достигнет он в зрелости?..»
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
