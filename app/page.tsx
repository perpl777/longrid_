import Link from "next/link";

import Image from "next/image";
import HeadImg from "@/public/images/1.svg"
import ReadImg from "@/public/images/читать.svg"


export default function Home() {
  return (
    <div className="py-14 max-lg:py-8">
      <div className="flex px-24 max-lg:px-8 justify-between items-end pb-16 max-lg:pb-6 pt-5 max-lg:flex-col max-lg:items-start">
        <h1 className="text-6xl w-6/12 max-lg:w-10/12 max-sm:w-full max-sm:text-4xl max-lg:text-5xl leading-tight">Топ-4 художников эпохи Возрождения в <span className="text-orange-600">Эрмитаже</span></h1>
        <p className="text-3xl max-sm:text-xl max-lg:pt-8">XIII—XVI</p>
      </div>
      <div className="relative">
        <Image src={HeadImg} alt="picture" style={{objectFit: "cover", width: "100%"}} className="max-sm:h-44 px-24 max-sm:px-0 max-sm:my-5"/>
        
        <div className="absolute inset-0 flex justify-center items-center  max-sm:overflow-hidden">
          <Link href="/reading">
            <Image 
              src={ReadImg} 
              alt="picture"
              className="hover:scale-110 transition-all duration-300 max-sm:scale-125"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
