import Image from "next/image";
import Close from 'public/svg/close-icon.svg'
import Minimize from 'public/svg/minimize-icon.svg'

function Skills() {
    return (
            <section className="grid grid-cols-3 grid-rows-1 gap-7 w-11/12 pb-10">
                <div className="bg-primary p-[2px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3">programming languages</h2>
                        <div className="flex flex-row gap-x-1">
                            <Close/>
                            <Minimize/>
                            <Image src='./close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-1 pb-4 gap-y-5">
                        <ul className="text-zinc-700 pl-2 pt-2">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>C++</li>
                            <li>JAVA</li>
                            <li>PYTHON</li>
                            <li>SQL</li>
                            
                        </ul>
                    </div>
                </div>
                <div className="bg-primary p-[2px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3">framework & tools</h2>
                        <div className="flex flex-row gap-x-1">
                            <Close/>
                            <Minimize/>
                            <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-1 pb-4 gap-y-5">
                        <ul className="text-zinc-700 pl-2 pt-2">
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>Express.js</li>
                            <li>TailwindCSS</li>
                            <li>Git / Github</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                            <li>SQLite</li>
                            <li>Postman</li>
                            <li>Swagger</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-primary p-[2px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white ml-3">others</h2>
                        <div className="flex flex-row gap-x-1">
                            <Close/>
                            <Minimize/>
                            <Image src='./close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-1 pb-4 gap-y-5">
                        <ul className="text-zinc-700 pl-2 pt-2">
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