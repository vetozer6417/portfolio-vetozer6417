import Skills from "../components/Skills";
import SocialMedia from "../components/SocialMedia";

function page() {
    return (
        <main className="bg-[#1e8080] flex flex-col items-center min-h-screen py-5">
            <div className="
            bg-primary
            hover:bg-zinc-400
            px-5 
            py-2 
            mb-5 
            shadow-[0_3px_10px_rgb(0,0,0,0.2)]
            border-t-2
            border-l-2
            border-b-2 border-b-zinc-600
            border-r-2 border-r-zinc-600
            ">
                <h1 className="text-xl font-medium">my skills</h1>
            </div>
            <Skills/>

            <div className="
            bg-primary
            hover:bg-zinc-400
            px-5 
            py-2 
            mb-5 
            shadow-[0_3px_10px_rgb(0,0,0,0.2)]
            border-t-2
            border-l-2
            border-b-2 border-b-zinc-600
            border-r-2 border-r-zinc-600
            ">
                <h2 className="text-xl font-medium">social media</h2>
            </div>
            <SocialMedia/>
        </main>
    );
}

export default page;