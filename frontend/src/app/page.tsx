import Image from "next/image";
import Aboutme from "./components/Aboutme";
import ExperinceSkills from "./components/ExperinceSkills";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Aboutme/>
      <ExperinceSkills/>
    </main>
  );
}
