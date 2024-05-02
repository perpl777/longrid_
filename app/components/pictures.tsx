import Image from "next/image";
import Link from "next/link"


interface Props {
    picture: any
    title: string
}

export default function Pictures({picture, title}: Props) {
    return (
        <div className="border border-black p-6">
            <Image src={picture} alt="picture"/>
            <p className="font-bold text-center pt-4">{title}</p>
        </div>
    );
}
