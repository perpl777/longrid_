import Image from "next/image";
import Link from "next/link";

import LeoImg from "@/public/images/artists/leo.svg"
import RaftImg from "@/public/images/artists/raf.svg"
import TictImg from "@/public/images/artists/tic.svg"
import MiktImg from "@/public/images/artists/mik.svg"



export default function Biografies() {
    return (
        
        <div className="flex flex-col px-40">
            <h2 className="textMont font-bold text-4xl pb-8 max-lg:flex max-lg:justify-center">Биография</h2>

            <div className="flex space-x-[1px] max-lg:flex-col max-lg:items-center">
                <div className="overflow-hidden h-[475px] w-[268px] bg-neutral-400 flex flex-col border-2 border-black opacity-70 max-sm:opacity-100 hover:opacity-100 transition-opacity">
                    <Link href="/michelangelo" className="m-auto">
                        <button className="border-2 border-black w-24 h-7 text-sm mt-7 m-auto">Биография</button>
                    </Link>
                    <p className="text-4xl font-light pt-4 pl-4">Буонарроти</p>
                    <p className="text-3xl font-light text-orange-700 pl-4 pb-4">Микеланджело</p>
                    <Image src={MiktImg} alt="artist" width={220} height={339}></Image>
                </div>


                <div className="overflow-hidden h-[475px] w-[268px] bg-neutral-400 flex flex-col border-2 border-black opacity-70 max-sm:opacity-100 hover:opacity-100 transition-opacity">
                    <Link href="/daVinci" className="m-auto">
                        <button className="border-2 border-black w-24 h-7 text-sm mt-7 m-auto">Биография</button>
                    </Link>
                    <p className="text-4xl font-light pt-4 pl-4">Леонардо</p>
                    <p className="text-3xl font-light text-orange-700 pl-4 pb-4">Да Винчи</p>
                    <Image src={LeoImg} alt="artist" width={268} height={330}></Image>
                </div>


                <div className="overflow-hidden h-[475px] w-[268px] bg-neutral-400 flex flex-col border-2 border-black opacity-70 max-sm:opacity-100 hover:opacity-100 transition-opacity">
                    <Link href="/raphael" className="m-auto">
                        <button className="border-2 border-black w-24 h-7 text-sm mt-7 m-auto">Биография</button>
                    </Link>
                    <p className="text-4xl font-light pt-4 pl-4">Санти</p>
                    <p className="text-3xl font-light text-orange-700 pl-4 pb-4">Рафаэль</p>
                    <Image src={RaftImg} alt="artist" width={250} height={339}></Image>
                </div>


                <div className="overflow-hidden h-[475px] w-[268px] bg-neutral-400 flex flex-col border-2 border-black opacity-70 max-sm:opacity-100 hover:opacity-100 transition-opacity">
                    <Link href="/titian" className="m-auto">
                        <button className="border-2 border-black w-24 h-7 text-sm mt-7 m-auto">Биография</button>
                    </Link>
                    <p className="text-4xl font-light pt-4 pl-4">Вечеллио</p>
                    <p className="text-3xl font-light text-orange-700 pl-4 pb-4">Тициан</p>
                    <Image src={TictImg} alt="artist" width={285} height={348}></Image>
                </div>
            </div>
        </div>
    );
}
