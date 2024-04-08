import Image from "next/image";

function ExperinceSkills() {
    return (
        <section className="bg-[#1e8080] p-5 flex flex-row gap-x-4 justify-center">
            {/* Experience */}
            <div className="w-[600px] bg-primary p-[2px]">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">experiences</h2>
                    <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                </div>
                <div className="flex flex-col divide-y divide-zinc-500 divide-dashed">
                    <div className="p-2">
                        <h3 className="font-semibold font-lato text-lg italic">Kasalong Premium Thai Rice</h3>
                        <p className="text-zinc-600 text-sm mt-2">Me and my co-worker have built this website using WordPress for our client, ensuring SSL/TLS security and implementing SEO for improved online presence.</p>
                        <p className="text-zinc-600 text-sm mt-2"><span className="font-medium text-[#04008a]">Technologies Used: </span>Figma | Wordpress | Semrush | Google Analytics | Polylang | Jetpack</p>
                    </div>
                    <div className="p-2">
                        <h3 className="font-semibold font-lato text-lg italic">Kasalong Premium Thai Rice</h3>
                        <p className="text-zinc-600 text-sm mt-2">Me and my co-worker have built this website using WordPress for our client, ensuring SSL/TLS security and implementing SEO for improved online presence.</p>
                        <p className="text-zinc-600 text-sm mt-2"><span className="font-medium text-[#04008a]">Technologies Used: </span>Figma | Wordpress | Semrush | Google Analytics | Polylang | Jetpack</p>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="w-[600px] bg-primary p-[2px]">
                <div className='bg-gradient-to-r from-[#0d2962] to-[#9bc6e4] flex flex-row items-center justify-between'>
                    <h2 className="text-white ml-3">skills</h2>
                    <Image src='/close-button.png' alt='Close' width={20} height={10} className="mr-1"/>
                </div>
            </div>
        </section>
    );
}

export default ExperinceSkills;