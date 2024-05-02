'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'


export default function Header() {

    const pathname = usePathname()


    return (
        <>
            <div className="mx-24 flex items-center justify-between border-b border-black h-20 max-lg:h-16 max-lg:mx-8">
                <p className="textMont font-bold max-lg:text-sm">CityGuide</p>
                <ol className="flex space-x-12 max-lg:space-x-4 max-sm:hidden">
                    <Link href="/titian" className={`link hover:underline-offset-[6px] hover:underline transition-all ${pathname === '/titian' ? 'underline underline-offset-[6px]' : ''}`}>
                        <li>
                            Тициан
                        </li>
                    </Link>
                    <Link href="/michelangelo" className={`link hover:underline-offset-[6px] hover:underline transition-all ${pathname === '/michelangelo' ? 'underline underline-offset-[6px]' : ''}`}>
                        <li>
                            Микеланджело
                        </li>
                    </Link>
                    <Link href="/raphael" className={`link hover:underline-offset-[6px] hover:underline transition-all ${pathname === '/raphael' ? 'underline underline-offset-[6px]' : ''}`}>
                        <li>
                            Рафаэль
                        </li>
                    </Link>
                    <Link href="/daVinci" className={`link hover:underline-offset-[6px] hover:underline transition-all ${pathname === '/daVinci' ? 'underline underline-offset-[6px]' : ''}`}>
                        <li>
                            Да Винчи
                        </li>
                    </Link>
                </ol>
                <Link href="/">
                    <button className="textMont border max-lg:text-sm border-black px-7 py-2 hover:bg-gray-950 hover:text-white transition-all">
                        Главная
                    </button>
                </Link>
            </div>
            {
                <ol className="hidden px-6 justify-around max-sm:flex pt-4 max-[500px]:text-sm">
                    <Link href="/titian" className={`link hover:underline-offset-[6px] hover:underline transition-all ${pathname === '/titian' ? 'underline underline-offset-[6px]' : ''}`}>
                        <li>
                            Тициан
                        </li>
                    </Link>
                    <Link href="/michelangelo" className={`link hover:underline-offset-[6px] hover:underline transition-all ${pathname === '/michelangelo' ? 'underline underline-offset-[6px]' : ''}`}>
                        <li>
                            Микеланджело
                        </li>
                    </Link>
                    <Link href="/raphael" className={`link hover:underline-offset-[6px] hover:underline transition-all ${pathname === '/raphael' ? 'underline underline-offset-[6px]' : ''}`}>
                        <li>
                            Рафаэль
                        </li>
                    </Link>
                    <Link href="/daVinci" className={`link hover:underline-offset-[6px] hover:underline transition-all ${pathname === '/daVinci' ? 'underline underline-offset-[6px]' : ''}`}>
                        <li>
                            Да Винчи
                        </li>
                    </Link>
                </ol>
            }
        </>
    );
}
