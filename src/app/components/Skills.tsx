import Image from "next/image";
import Close from 'public/svg/close-icon.svg'
import Minimize from 'public/svg/minimize-icon.svg'

function Skills() {
    return (
            <section 
                className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 gap-7
                w-10/12
                lg:w-10/12 xl:w-8/12 pb-10
            ">
                <div className="bg-primary p-[2px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3 text-sm xl:text-base">programming languages</h2>
                        <div className="flex flex-row gap-x-1">
                            <Close/>
                            <Minimize/>
                            <Image src='/close-button.png' alt='Close' width={20} height={20} className="mr-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-1 pb-4 gap-y-5">
                        <ul className="text-zinc-700 pl-2 pt-2 text-sm xl:text-base">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>C++</li>
                            <li>JAVA</li>
                            <li>SQL</li>
                            
                        </ul>
                    </div>
                </div>
                <div className="bg-primary p-[2px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3 text-sm xl:text-base">framework & tools</h2>
                        <div className="flex flex-row gap-x-1">
                            <Close/>
                            <Minimize/>
                            <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-1 pb-4 gap-y-5">
                        <ul className="text-zinc-700 pl-2 pt-2 text-sm xl:text-base">
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>Express.js</li>
                            <li>Nest.js</li>
                            <li>TailwindCSS</li>
                            <li>Git / Github</li>
                            <li>Playwright</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                            <li>Postman</li>
                            <li>Swagger</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-primary p-[2px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3 text-sm xl:text-base">others</h2>
                        <div className="flex flex-row gap-x-1">
                            <Close/>
                            <Minimize/>
                            <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-1 pb-4 gap-y-5">
                        <ul className="text-zinc-700 pl-2 pt-2 text-sm xl:text-base">
                            <li>Figma</li>
                            <li>Wordpress</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Premiere Pro</li>
                            <li>Semrush</li>
                            <li>Meta Business Suite</li>
                        </ul>
                    </div>
                </div>
            </section>
    );
}

export default Skills;