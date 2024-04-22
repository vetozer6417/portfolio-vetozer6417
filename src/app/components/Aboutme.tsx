import Image from "next/image";

export default function Aboutme() {
    return (
        <section className="flex items-center justify-center bg-light px-5 py-5">
            <div className="flex flex-col justify-center">
                <p className="text-lg">Hello I'm</p>
                <h1 className="font-lato font-bold italic text-3xl lg:text-5xl">Theerat Punyasit</h1>
                <p>Full Stack Web Developer and UX/UI Designer</p>
                <div className="bg-primary border-t-[1px] border-t-black border-l-[1px] border-l-black border-b-[1px] border-b-white border-r-[1px] border-r-white mt-3 px-2 py-2 w-11/12 flex items-center text-center h-[120px]">
                    <p className="text-[#212121] text-sm">I am a highly motivated person with good communication skills. Experienced in doing family’s medium-scale e-commerce business since young.</p>
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