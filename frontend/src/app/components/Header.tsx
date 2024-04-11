import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full h-[100px] bg-primary flex flex-col">
            <div className="bg-[#04008a] h-[25px] mx-1 mt-1 flex flex-row items-center justify-center">
                <p className="text-white text-sm">MY RECENT PROJECT - <a href='https://www.kasalongrice.com' className="hover:underline" target="_blank" rel="noopener noreferrer">WWW.KASALONGRICE.COM</a></p>
            </div>
            <div className="flex flex-row mx-3 items-center justify-between">
                <Link href='/myprojects'>
                    <Image src='./projects-icon.png' alt='My Projects' width={45} height={45} draggable="false"/>
                </Link>
                <Link href='/'>
                    <Image src='./main-logo.png' alt='Logo' width={215} height={76} draggable="false"/>
                </Link>
                <Link href='/aboutme'>
                    <Image src='./social-icon.png' alt='Social media' width={45} height={45} draggable="false"/>
                </Link>
            </div>
        </header>
    )
}