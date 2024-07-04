import Aboutme from "./components/Aboutme";
import ExperinceSkills from "./components/ExperinceSkills";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Aboutme/>
      <ExperinceSkills/>
    </main>
  );
}
