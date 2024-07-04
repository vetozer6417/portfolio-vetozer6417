'use client'
import { ReactTyped } from "react-typed";
import Image from "next/image";

export default function Aboutme() {
    return (
        <section className="flex items-center justify-center px-5 py-5 w-full bg-[#e6e6e6]">
            <div className="flex flex-col items-left md:w-full lg:w-10/12 xl:w-6/12 2xl:w-[1280px]">
                <p className="text-lg">Hello I'm</p>
                <h1 className="font-lato font-bold italic text-3xl lg:text-5xl">Theerat Punyasit</h1>
                <p>Full Stack Web Developer and UX/UI Designer</p>
                <div className="
                    bg-gradient-to-l from-primary to-[#e6e6e6]
                    border-t-[1px] border-t-black border-l-[1px] border-l-black border-b-[1px] border-b-white border-r-[1px] border-r-white mt-3 px-2 py-2 md:py-1 lg:py-5 flex items-center text-center">
                    <p className="text-[#212121] text-left text-sm">
                        I am a{" "}
                        <ReactTyped strings={["person", "highly motivated person with good communication skills. Experienced in doing family’s e-commerce business since young."]} 
                        typeSpeed={70}
                        backSpeed={40}
                        />
                    </p>
                </div>
                <div className="flex flex-row mt-5 items-center gap-x-3">
                    <Image src='/thai-flag-icon.png' width={30} height={30} alt="Thai Flag Icon"/>
                    <p className="text-[#212121] text-sm"><span className="font-medium">Address: </span>Bangkok, Thailand</p>
                </div>
                <div className="flex flex-row mt-5 items-center gap-x-3">
                    <Image src='/languages.png' width={30} height={30} alt="Languages Icon"/>
                    <p className="text-[#212121] text-sm"><span className="font-medium">Languages: </span>Thai (Native) | English (Proficient) </p>
                </div>
            </div>
      </section>
    )
}