import HeaderButtonText from "../components/HeaderButtonText";
import Skills from "../components/Skills";
import SocialMedia from "../components/SocialMedia";

function page() {
    return (
        <main className="bg-[#1e8080] flex flex-col items-center min-h-screen py-5">
            <HeaderButtonText>my skills</HeaderButtonText>
            <Skills/>
            <HeaderButtonText>my social media</HeaderButtonText>
            <SocialMedia/>
        </main>
    );
}

export default page;