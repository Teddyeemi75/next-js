import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
            <Image src={"/videographe.png"} width={200} height={200} layout="responsive" />
        </div>
        <h1 className="text-2xl text-gray-750 uppercase font-bold">Bienvenue sur NetFlex</h1>
        <p className="text-gray-700">Un large choix de films à la demande.</p>
        <Link href="/contact">
            <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">Contactez-nous</button>
        </Link> 
    </div>
  );
};

export default Hero;