import { poppins } from "@/utils/fonts";
import Image from "next/image";
import sorafiLogo from "@/public/logo.svg";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center font-light">
      <div className="my-10 flex w-9/12 flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-sorafi-stormGrey to-sorafi-cherrySakura p-48 text-center">
        <p className="text-6xl text-white">
          Revolutionizing How You Manage Digital Assets
        </p>
      </div>
      <Image src={sorafiLogo} alt="sorafi logo" height={120} width={120} />
      <div className={`${poppins.className} my-10 w-3/5 text-center text-xl`}>
        <h2 className="text-center text-4xl">Introducing Sorafi</h2>
        <p className="mx-auto mt-10 lg:w-1/4">
          The decentralized wallet that lets you securely manage crypto, fiat,
          and digital assets—with confidence.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Home;
