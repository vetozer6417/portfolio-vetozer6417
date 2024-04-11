'use client'
import Image from "next/image";
import Button from "./Button";
import BrainIcon from 'public/svg/brain.svg'
import HeartIcon from 'public/svg/heart.svg'
import BulbIcon from 'public/svg/bulb.svg'
import CollabIcon from 'public/svg/collab.svg'

// ขาด responsive
function ExperinceSkills() {
    return (
        <section className="bg-[#1e8080] p-5 grid grid-cols-2 grid-rows-5 gap-5">
            {/* Experience */}
            <div className="row-span-5 w-full bg-primary p-[2px]">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">experiences</h2>
                    <Image src='./close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                </div>
                <div className="flex flex-col divide-y divide-zinc-500 divide-dashed gap-y-4">
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

                    <div className="p-2">
                        <h3 className="font-semibold font-lato text-lg italic mt-2">Expense Tracking Web-Application</h3>
                        <p className="text-zinc-600 text-sm mt-2 tracking-tight">Built with NodeJS, Express and MongoDB by me and my colleague. Test API with Postman. This project was built for the subject 2110222 Introduction To CEDT.</p>
                        <p className="text-zinc-600 text-sm mt-2"><span className="font-medium text-[#04008a]">Technologies Used: </span>ExpressJS | VanillaJS | MongoDB | Postman</p>
                    </div>
                </div>
                <div className="w-full flex justify-center pt-2 pb-5">
                    <Button width={200} height={80}>Discover more</Button>
                </div>
            </div>
            {/* Skills */}
            <div className="row-span-3 col-start-2 bg-primary p-[2px]">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">soft skills</h2>
                    <Image src='./close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                </div>
                <div className="flex flex-col pt-1 gap-y-3 justify-center items-center">
                    {/* Fast Learner */}
                    <div className="flex flex-row ml-1">
                        <div className="w-2/12 flex items-center justify-center">
                            <BrainIcon/>
                        </div>
                        <div className="w-10/12">
                            <h3 className="font-medium">Fast Learner</h3>
                            <p className="text-sm text-zinc-600">Can quickly learn and adapt myself to new technologies and programming languages.</p>
                        </div>
                    </div>
                    {/* Passionate */}
                    <div className="flex flex-row ml-1">
                        <div className="w-2/12 flex items-center justify-center">
                            <HeartIcon/>
                        </div>
                        <div className="w-10/12">
                            <h3 className="font-medium">Passionate</h3>
                            <p className="text-sm text-zinc-600">Can quickly learn and adapt myself to new technologies and programming languages.</p>
                        </div>
                    </div>
                    {/* Good Cmmu SKills */}
                    <div className="flex flex-row ml-1">
                        <div className="w-2/12 flex items-center justify-center">
                            <BulbIcon/>
                        </div>
                        <div className="w-10/12">
                            <h3 className="font-medium">Good Communication Skills</h3>
                            <p className="text-sm text-zinc-600">Can quickly learn and adapt myself to new technologies and programming languages.</p>
                        </div>
                    </div>
                    {/* Collaborative */}
                    <div className="flex flex-row ml-1">
                        <div className="w-2/12 flex items-center justify-center">
                            <CollabIcon/>
                        </div>
                        <div className="w-10/12">
                            <h3 className="font-medium">Collaborative</h3>
                            <p className="text-sm text-zinc-600">Can quickly learn and adapt myself to new technologies and programming languages.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edu */}
            <div className="row-span-2 col-start-2 row-start-4 bg-primary p-[2px]">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">education</h2>
                    <Image src='./close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                </div>
                <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 py-5 gap-y-5">
                    <div className="flex flex-col">
                        <h3 className="font-lato font-semibold italic">B.Eng. Computer Engineering and Digital Technology</h3>
                        <p className="text-sm text-zinc-600"><span className="font-medium text-[#04008a] mr-5">Chulalongkorn University</span>Aug 2023 - present</p>
                    </div>
                    <div className="flex flex-col justify-center pt-3">
                        <h3 className="font-lato font-semibold italic">Samakkhi Witthayakhom School</h3>
                        <p className="text-sm text-zinc-600"><span className="font-medium text-[#04008a] mr-5">GPA 3.92</span>May 2020 - March 2022</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperinceSkills;