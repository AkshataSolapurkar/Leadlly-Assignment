import Image from "next/image";
import HeroHead from "./component/HeroHead";
import { fetchCars } from "../../utils";
import NavBar from "./component/NavBar";
import { carprops } from "../../types";
import Card from "./component/Card";
import CarCard from "./component/Card";
import Footer from "./component/Footer";

interface CarCardProps{
  cars: carprops
}

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars)

  const isEmpty = !Array.isArray(allCars) ||  allCars.length <1 || !allCars;
  return (
    <main className="">
      <NavBar/>
      <HeroHead/>
      <div className='px-[30px] home__cars-wrapper'>
               {allCars?.map((cars:carprops) => (
                 <CarCard cars={cars} />
               ))}
      </div>
      <Footer/>
    </main>
  );
}
