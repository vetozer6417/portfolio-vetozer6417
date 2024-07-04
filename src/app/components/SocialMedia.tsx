import Image from "next/image";
import Close from 'public/svg/close-icon.svg'
import Minimize from 'public/svg/minimize-icon.svg'
import GitHub from 'public/svg/Github.svg'
import Gmail from 'public/svg/Google.svg'
import Location from 'public/svg/Location_Pin.svg'
import LinkedIn from 'public/svg/Vector.svg'

function SocialMedia() {
    const socialIcons = [
        { icon: <Gmail/>, text: 'vetozer6417@gmail.com', link: 'mailto:vetozer6417@gmail.com'},
        { icon: <GitHub/>, text: 'vetozer6417', link: 'https://github.com/vetozer6417'},
        { icon: <LinkedIn/>, text: 'Theerat Punyasit', link: 'https://www.linkedin.com/in/theerat-que-punyasit-074219180'},
        { icon: <Location/>, text: 'Bangkok, Thailand'},
    ]
    return (
        <section className="bg-primary p-[2px] w-10/12 md:w-6/12 lg:w-5/12 2xl:w-3/12 h-6/12 
        xl:text-base text-sm
        shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">let's get connected!</h2>
                    <div className="flex flex-row gap-x-1">
                        <Close/>
                        <Minimize/>
                        <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                    </div>
                </div>
                <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-1 pb-4 gap-y-2">
                   {
                    socialIcons.map(({icon,text,link}, index) => (
                        <div className="pt-3 flex flex-row gap-x-3 text-zinc-700" key={index}>
                            <div>
                                {icon}
                            </div>
                            {/* If that object has the link --> make it clickable */}
                            {
                                link ? (
                                    <a href={link} className="hover:underline" target="_blank">{text}</a>
                                ) : (
                                    <p>{text}</p>
                                )
                            }
                        </div>
                    ))
                   }
                </div>
            </section>
    );
}

export default SocialMedia;