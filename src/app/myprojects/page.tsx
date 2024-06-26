'use client'
import Image from "next/image";
import Minimize from 'public/svg/minimize-icon.svg'
import Close from 'public/svg/close-icon.svg'
import HeaderButtonText from "../components/HeaderButtonText";
import Carousel from "../components/Carousel";

function page() {
    const projectLists = [
        {
            name: 'Kasalong Premium Thai Rice',
            description: 'Me and my co-worker have built this website using WordPress for MS HERITAGE GROUP CO., LTD, with responsive and multi-language web design .',
            techStack: ['Figma', 'Wordpress', 'Polylang Plugin', 'Elementor Plugin', 'Google Analytics', 'Semrush'],
            website: 'https://www.kasalongrice.com'
        },
        {
            name: 'Expense Tracking Web Application',
            description: 'An Expense Tracking Web-Application built with NodeJS, Express and MongoDB by me and my colleague. This project was built for the subject 2110222 Introduction To CEDT.',
            techStack: ['NodeJS', 'Express', 'MongoDB'],
            website: 'https://github.com/vetozer6417/final-project_expense-g20.git'
        },
        {
            name: 'Blog Web Application',
            description: 'A Simple Blog Web Apllication built with ReactJS, Express, MongoDB and TailwindCSS. This project was built to enhance my front-end web developing skills.',
            techStack: ['ReactJS', 'TailwindCSS', 'Express', 'MongoDB', 'Postman']
        }
    ]

    const slides = [
        '/carouselImages/kasalong-post_1.jpg',
        '/carouselImages/kasalong-post_2.jpg',
        '/carouselImages/kasalong-post_3.jpg',
    ]

    return (
        <main className="bg-[#1e8080] flex flex-col justify-center items-center min-h-screen py-5">
            <HeaderButtonText>my projects</HeaderButtonText>
            <section className="bg-primary p-[2px] w-8/12 h-6/12 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">things i've done with heart</h2>
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
            <section className="bg-primary p-[2px] w-6/12 h-6/12  mt-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] pb-5">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">projects gallery</h2>
                    <div className="flex flex-row gap-x-1">
                        <Close/>
                        <Minimize/>
                        <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                    </div>
                </div>
                <div className="flex flex-col divide-y divide-zinc-500 divide-dashed px-2 pt-6 pb-4 gap-y-5 items-center">
                    <Carousel>
                        {
                            slides.map((s, index) => (
                                <img key={index} src={s} alt={`Slide ${index}`} width={550}/>
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
                        <a href='https://www.kasalongrice.com' target="_blank" rel="noopener noreferrer">www.kasalongrice.com</a>
                    </button>
                </div>
            </section>
        </main>
    );
}

export default page;