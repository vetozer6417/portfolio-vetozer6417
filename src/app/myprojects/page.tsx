'use client'
import Image from "next/image";
import Minimize from 'public/svg/minimize-icon.svg'
import Close from 'public/svg/close-icon.svg'
import HeaderButtonText from "../components/HeaderButtonText";
import Carousel from "../components/Carousel";

function page() {
    const projectLists = [
        {
            name: 'Charoen Pokphand Group (CP Group)',
            description: 'Completed a summer internship during my freshman year as a full-stack developer in the Risk Management Office. My responsibilities included UX/UI design, coded frontend part, and automated end-to-end testing.',
            techStack: ['ReactJS', 'Figma', 'Playwright']
        },
        {
            name: 'ซองดี (Zongggd) E-Commerce Website',
            description: 'Worked directly with customers to understand their needs and designed/developed a print-on-demand e-commerce website. Integrated the Paysolution payment gateway. Deployed the platform on DigitalOcean and AWS. leveraging services like Amplify, Cognito, CloudFront, and S3.',
            techStack: ['Next.js', 'Nest.js', 'AWS', 'DigitalOcean', 'Paysolution']
        },
        {
            name: 'Kasalong Premium Thai Rice',
            description: 'Me and my co-worker have built this website using WordPress for MS HERITAGE GROUP CO., LTD, with responsive and multi-language web design .',
            techStack: ['Figma', 'Wordpress', 'Polylang Plugin', 'Elementor Plugin', 'Google Analytics', 'Semrush'],
            website: 'https://www.kasalongrice.com'
        },
    ]

    const slides = [
        '/carouselImages/ig-post-3.jpg',
        '/carouselImages/ig-post-2.jpg',
        '/carouselImages/ig-post2-2.jpg',
        '/carouselImages/kasalong-post_1.jpg',
        '/carouselImages/kasalong-post_2.jpg',
        '/carouselImages/kasalong-post_3.jpg',
    ]

    return (
        <main className="bg-[#1e8080] flex min-h-screen items-center justify-center w-screen py-5">
            <div className="flex flex-col justify-center items-center 
                xl:w-8/12 2xl:w-[1280px] w-10/12">
                <HeaderButtonText>my projects</HeaderButtonText>
                <section className="bg-primary p-[2px] 2xl:w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white md:ml-3 ml-2 text-sm md:text-base">things i've done with heart</h2>
                        <div className="flex flex-row gap-x-1">
                            <Close/>
                            <Minimize/>
                            <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-1 pb-4 gap-y-5">
                        {
                            projectLists.map(({name,description,techStack,website}) => (
                            <div className="flex flex-col pt-2" key={name.trim()}>
                                <h3 className="font-lato font-semibold text-xl italic">{name}</h3>
                                <p className="text-zinc-600 text-sm mt-2 tracking-tight">
                                    {description}
                                </p>
                                <p className="text-zinc-600 text-sm mt-2">
                                    <span className="font-medium text-[#04008a]">Tech Stack: </span>
                                    {techStack.join(' | ')}
                                </p>
                                {website && (
                                    <p className="text-zinc-600 text-sm mt-2">
                                        <a href={website} className="font-medium text-[#04008a] hover:underline" target="_blank" rel="noopener noreferrer">Visit the website</a>
                                    
                                    </p>
                                )}
                            </div>
                            ))
                        }
                        
                    </div>
                </section>
                <section className="bg-primary p-[2px] pb-5 
                    2xl:w-6/12 xl:w-[600px] lg:w-[610px] md:w-[600px] w-full
                    h-6/12 
                    mt-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                        <h2 className="text-white md:ml-3 ml-2 text-sm md:text-base">projects gallery</h2>
                        <div className="flex flex-row gap-x-1">
                            <Close/>
                            <Minimize/>
                            <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                        </div>
                    </div>
                    <div className="flex flex-col divide-y divide-zinc-500 divide-dashed md:px-5 px-4 pt-6 pb-4 gap-y-5 items-center">
                        <Carousel>
                            {
                                slides.map((s, index) => (
                                    <img key={index} src={s} alt={`Slide ${index}`} className="w-full"/>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className="flex justify-center">
                        <button className='
                        bg-primary 
                        px-1 
                        text-sm
                        border-t-2
                        border-l-2
                        border-b-2 border-b-zinc-600
                        border-r-2 border-r-zinc-600
                        '>
                            <a href='https://www.kasalongrice.com' target="_blank" rel="noopener noreferrer">www.zongggd.com</a>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default page;