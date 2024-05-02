import LeftArm from "@/public/images/arm1.svg"
import RightArm from "@/public/images/arm2.svg"
import Image from "next/image";

import Ermitaz from "../components/ermitaz";
import ArtistComponent from "../components/artist";
import Biografies from "../components/biografies";


export default function ReadingPage() {
    return (
        <div className="py-20 max-sm:pt-36 max-sm:pb-20">
            <div className="flex justify-center items-center pb-32 max-sm:pb-14">
                <Image alt="arm" src={LeftArm} className="absolute max-sm:top-36 left-0 pb-8 border-b border-black max-lg:border-none max-lg:w-[250px] max-sm:w-[160px]" width={320} />
                <p className="textMont w-5/12 max-sm:w-10/12">
                    <span className="textMont font-semibold">
                        Эпоха Возрождения, Леонардо да Винчи, Рафаэль,
                        Санта-Мария-дель Фьоре
                    </span> — все это относит нас к Италии.
                    Кажется будто, чтобы увидеть шедевры этой эпохи надо непременно
                    отправляться на Апеннинский полуостров, но немало произведений
                    выдающихся мастеров Ренессанса есть и в Эрмитаже!
                </p>
                <Image alt="arm" src={RightArm} className="absolute max-sm:top-36 right-0 pb-8 border-b border-black max-lg:border-none max-lg:w-[250px] max-sm:w-[160px]" width={320}/>
            </div>

            <Ermitaz/>

            <div className="pt-44 max-sm:pt-24">
                <ArtistComponent />
            </div>

            <div className="pt-32 max-sm:pt-24">
                <Biografies />
            </div>
        </div>
    );
}
