import Image from "next/image";

import ImgArtist from "@/public/images/artistBg/l.svg"
import TitleImg from "@/public/images/leoTitle.svg"

import Picture from "@/public/images/pictures/leo.png"
import Picture2 from "@/public/images/pictures/leo2.png"


export default function Page() {
    return (
        <div className="flex flex-col items-center pt-20">
            <Image src={TitleImg} alt="name" className="max-sm:w-72"></Image>

            <div className="flex justify-center items-center py-14 gap-14 max-lg:flex-col">
                <Image src={ImgArtist} alt="artist" className="max-sm:w-56"></Image>
                <div className="w-4/12 space-y-6 max-lg:w-8/12">
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Дата и место рождения:</span> 
                        <span className="textMont font-semibold">15 апреля 1452 г., Anchiano, Италия</span>
                    </div>
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Дата и место смерти:</span> 
                        <span className="textMont font-semibold">2 мая 1519 г., Кло-Люсе, Амбуаз, Франция</span>
                    </div>
                    <div>
                        <span className="textMont text-gray-500 font-semibold">Периоды:</span> 
                        <span className="textMont font-semibold">
                            Возрождение, Итальянский Ренессанс, Высокое Возрождение
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
                            Один из крупнейших представителей искусства Высокого Возрождения,  пример «универсального человека»
                        </p>
                    </div>
                </div>

                <div className="flex w-full max-lg:flex-col max-lg:items-center">
                    <div className="border border-black p-12 max-lg:p-8 w-1/2 max-lg:w-full flex flex-col">
                        <Image src={Picture2} alt="picture" className="w-full object-cover pb-6"/>
                        <p className="text-6xl textMont max-sm:text-4xl">01 <span className="text-xl font-bold textMont max-sm:flex-wrap max-sm:flex max-sm:pt-3">Особенности творчества</span></p>
                        <p className="textMont pt-4">
                            Все созданные им портреты 
                            выполнены с потрясающей анатомической точностью. 
                            Да Винчи всю жизнь интересовался устройством человеческого тела и потратил 
                            много лет на изучение этой области науки. Кроме того, в числе изобретений Леонардо 
                            да Винчи — живописный прием сфумато: с помощью нанесения тончайших слоев краски 
                            достигается эффект «дымчастости» изображения, смягчения очертаний фигур и предметов. 
                            Споры о подобной технике письма до сих пор не утихают. Есть мнение, что подобный потрясающий 
                            эффект на картинах Леонардо да Винчи — подтверждение того, что он, как и многие другие художники 
                            Ренессанса, использовал для работы различные оптические приспособления. Даже если это и так, данное
                                предположение нисколько не умаляет заслуг автора, а только подтверждает 
                            его высочайшее мастерство, широту взглядов и многогранность таланта.
                        </p>
                    </div>
                    <div className="border-r border-t border-b max-lg:border-l border-black p-12 max-lg:p-8 w-1/2  max-lg:w-full flex flex-col">
                        <Image src={Picture} alt="picture" className="w-full object-cover pb-6"/>
                        <p className="text-6xl textMont">02</p>
                        <p className="textMont pt-4">
                            Однако неизвестно, как развивались бы 
                            таланты Леонардо, если бы он не получил соответствующего 
                            воспитания в духе эпохи Возрождения. С раннего детства мальчик 
                            рисовал, играл на музыкальных инструментах и постигал основы ремесел, 
                            которые пригодились ему в будущем. Согласно одной из легенд, писать да Винчи 
                            научился самостоятельно, и поэтому всю жизнь использовал особый способ письма: 
                            левой рукой, справа налево и в зеркальном отражении. С детства Леонардо знал, 
                            что обладает многими талантами, но при этом был достаточно осторожным и скрытным. 
                            Эта скрытность только усилилась и на некоторое время даже превратилась в нелюдимость 
                            после того, как художника обвинили в содомии в 1476 году. Скандал из-за судебного 
                            разбирательства едва не стоил ему карьеры. Возможно, эта неприятная история послужила 
                            одной из причин того, что в записях 
                            художника практически отсутствует какая-либо информация о его личной жизни.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
