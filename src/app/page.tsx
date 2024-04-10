import Image from "next/image";
import HeroHead from "./component/HeroHead";
import NavBar from "./component/NavBar";

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <HeroHead/>
    </main>
  );
}
