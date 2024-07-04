'use client'
import Image from "next/image";
import Button from "./Button";
import BrainIcon from 'public/svg/brain.svg'
import HeartIcon from 'public/svg/heart.svg'
import BulbIcon from 'public/svg/bulb.svg'
import CollabIcon from 'public/svg/collab.svg'
import Link from "next/link";

// ขาด responsive
function ExperinceSkills() {
    return (
        <section className="flex justify-center bg-greenBg lg:px-10 2xl:px-[80px] w-full">
            <div 
                className="
                grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 
                py-5 
                lg:py-10
                px-5 
                gap-5 
                md:px-5 
                lg:gap-10 
                lg:px-0 
                lg:w-full 
                xl:w-[1280px] 
                2xl:w-[1280px]
            ">
                {/* Experience */}
                <div className="row-start-3 md:row-span-5 w-full bg-primary p-[2px]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3">experiences</h2>
                        <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed gap-y-4">
                        <div className="p-2">
                            <h3 className="font-semibold font-lato text-lg italic mt-2">Charoen Pokphand Group (CP Group)</h3>
                            <p className="text-zinc-600 text-sm mt-2 tracking-tight">Completed a summer internship during my freshman year as a full-stack developer in the Risk Management Office. My responsibilities included UX/UI design, coded frontend part, and automated end-to-end testing.</p>
                            <p className="text-zinc-600 text-sm mt-2"><span className="font-medium text-[#04008a]">Technologies Used: </span>ReactJS | Figma | Playwright</p>
                        </div>

                        <div className="p-2">
                            <h3 className="font-semibold font-lato text-lg italic">Kasalong Premium Thai Rice</h3>
                            <p className="text-zinc-600 text-sm mt-2 tracking-tight">Me and my co-worker have built this website using WordPress for our client, responsive design, ensuring SSL/TLS security and implementing SEO for improved online presence.</p>
                            <p className="text-zinc-600 text-sm mt-2"><span className="font-medium text-[#04008a]">Technologies Used: </span>Figma | Wordpress | Semrush | Google Analytics | Polylang | Jetpack</p>
                        </div>

                        <div className="p-2">
                            <h3 className="font-semibold font-lato text-lg italic mt-2">888bike</h3>
                            <p className="text-zinc-600 text-sm mt-2 tracking-tight">Worked part-time in the family e-commerce business as a UX/UI Designer and Social Media Administrator. 
                            I was responsible for designing website banners and ads, as well as managing advertisements on various social media platforms.</p>
                            <p className="text-zinc-600 text-sm mt-2"><span className="font-medium text-[#04008a]">Technologies Used: </span>Adobe Photoshop | Adobe Illustrator | Adobe Premiere Pro | Lnwshop | Meta Business Suite</p>
                        </div> 
                    </div>
                    <div className="w-full flex justify-center pt-2 pb-5">
                        <Link href='/myprojects'><Button width={200} height={80}>Discover more</Button></Link>
                    </div>
                </div>
                {/* Soft Skills */}
                <div className="row-start-1 md:row-span-3 md:col-start-2 md:row-start-1 bg-primary p-[2px]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3">soft skills</h2>
                        <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                    </div>
                    <div className="flex flex-col pt-4 pr-2 gap-y-3 justify-center items-left">
                        {/* Fast Learner */}
                        <div className="flex flex-row ml-2 gap-5">
                            <div className="w-1/12 flex items-center justify-center">
                                <BrainIcon/>
                            </div>
                            <div>
                                <h3 className="font-medium lg:text-sm">Fast Learner</h3>
                                <p className="text-sm text-zinc-600 md:text-[12px]">Can quickly learn and adapt myself to new technologies and programming languages.</p>
                            </div>
                        </div>
                        {/* Passionate */}
                        <div className="flex flex-row ml-2 gap-5">
                            <div className="w-1/12 flex items-center justify-center">
                                <HeartIcon/>
                            </div>
                            <div>
                                <h3 className="font-medium lg:text-sm">Passionate</h3>
                                <p className="text-sm text-zinc-600 md:text-[12px]">Love diving into code and obsessed with
                                every thing e-commerce.</p>
                            </div>
                        </div>
                        {/* Good Cmmu SKills */}
                        <div className="flex flex-row ml-2 gap-5">
                            <div className="w-1/12 flex items-center justify-center">
                                <BulbIcon/>
                            </div>
                            <div>
                                <h3 className="font-medium lg:text-sm">Good Communication Skills</h3>
                                <p className="text-sm text-zinc-600 md:text-[12px]">Love to communicate and collaborate
                                with other co-workers.</p>
                            </div>
                        </div>
                        {/* Collaborative */}
                        <div className="flex flex-row ml-2 mb-2 gap-5">
                            <div className="w-1/12 flex items-center justify-center">
                                <CollabIcon/>
                            </div>
                            <div>
                                <h3 className="font-medium lg:text-sm">Collaborative</h3>
                                <p className="text-sm text-zinc-600 md:text-[12px]">Strong team player, can work effectively 
                                with others.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Edu */}
                <div className="row-start-2 md:row-span-2 md:col-start-2 md:row-start-4 bg-primary p-[2px]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3">education</h2>
                        <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 py-5 gap-y-5">
                        <div className="flex flex-col">
                            <h3 className="font-lato font-semibold italic">B.Eng. Computer Engineering and Digital Technology</h3>
                            <p className="text-sm text-zinc-600"><span className="font-medium text-[#04008a] mr-5">Chulalongkorn University</span>Aug 2023 - present</p>
                            <p className="text-sm font-medium text-[#04008a] mr-5"><span className="">GPA 3.50</span></p>
                        </div>
                        <div className="flex flex-col justify-center pt-3">
                            <h3 className="font-lato font-semibold italic">Samakkhi Witthayakhom School</h3>
                            <p className="text-sm text-zinc-600"><span className="font-medium text-[#04008a] mr-5">GPA 3.92</span>May 2020 - March 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperinceSkills;