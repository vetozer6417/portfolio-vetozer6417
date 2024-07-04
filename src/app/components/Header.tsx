import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full h-max top-0 bg-primary flex flex-col">
            <div className="bg-[#04008a] h-[20px] md:h-[25px] mx-1 mt-1 
                flex flex-row items-center justify-center
                text-[10px] sm:text-sm
            ">
                <p className="text-white">MY RECENT PROJECT - <a href='https://www.kasalongrice.com' className="hover:underline" target="_blank" rel="noopener noreferrer">WWW.KASALONGRICE.COM</a></p>
            </div>
            <div className="flex flex-row mx-3 items-center justify-between py-1 md:py-0">
                <Link href='/myprojects'>
                    <div className="md:h-[45px] md:w-[45px] h-[30px] w-[30px] relative">
                        {/* width={45} height={45}  */}
                        <Image src='/projects-icon.png' alt='My Projects' fill draggable="false"/>
                    </div>
                </Link>
                <Link href='/'>
                    <div className="md:h-[76px] md:w-[216px] h-[35px] w-[100px] relative">
                        {/* width={215} height={76}  */}
                        <Image src='/main-logo.png' alt='Logo' fill draggable="false"/>
                    </div>
                </Link>
                <Link href='/aboutme'>
                    <div className="md:h-[45px] md:w-[45px] h-[30px] w-[30px] relative">
                        {/* width={45} height={45} */}
                        <Image src='/social-icon.png' alt='Social media' fill draggable="false"/>
                    </div>
                </Link>
            </div>
        </header>
    )
}