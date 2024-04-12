import Advantages from "@/components/sections/Advantages";
import Hero from "@/components/sections/Hero";
import Articles from "@/components/sections/Articles";
import Banner from "@/components/sections/Banner";
import Logos from "@/components/sections/Logos";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="advantages" className="mb-40 ">
      </div>
      <Advantages />
      <div id="articles">
      </div>
      <Articles />
      <Logos />
      <Banner />
    </>
  );
}
