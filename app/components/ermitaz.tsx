import ErmitazImg from "@/public/images/erm.png"
import Image from "next/image";

export default function Ermitaz() {
    return (
        <div className="w-3/4 border border-black m-auto p-8 max-md:grid-cols-1 max-sm:w-11/12 max-sm:p-6 grid grid-cols-3 gap-11">
            <div className="col-span-2">
                <div>
                    <Image src={ErmitazImg} alt="ermitaz"/>
                </div>
                <h2 className="textMont text-2xl font-bold pt-6">Эрмитаж</h2>
                <p className="textMont pt-1">
                    один из крупнейших музеев мира, 
                    располагающий собранием произведений искусства, 
                    охватывающим различные эпохи и культуры. 
                </p>
                <h3 className="textMont font-bold pt-6">Эпоха Возрождения</h3>
                <p className="textMont pt-1">
                    одна из наиболее значимых в истории искусства, и Эрмитаж 
                    гордится своей коллекцией этого времени
                </p>
            </div>
            <div>
                <p className="textMont">
                    В залах Эрмитажа вы можете увидеть шедевры  
                    Рафаэля, Тициана и других величайших мастеров этого периода. 
                    Прогулка по коридорам Эрмитажа позволит вам окунуться в эту 
                    уникальную эпоху, посмотреть на мир глазами этих непревзойденных художников.
                </p>
            </div>
        </div>
    );
}
