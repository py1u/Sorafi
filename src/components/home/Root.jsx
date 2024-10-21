import { poppins } from "@/utils/fonts";
import Image from "next/image";
import sorafiLogo from "@/public/logo.svg";
import ToastFail from "../toast/ToastFail";
import ToastNotify from "../toast/ToastNotify";
import ToastSuccess from "../toast/ToastSuccess";
import ToastWarn from "../toast/ToastWarn";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center font-light">
      <div className="my-10 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-sorafi-sakura-300 to-sorafi-sky-500 p-48 text-center">
        <p className="text-5xl text-white">
          Revolutionizing How You Manage Digital Assets
        </p>
      </div>
      <Image src={sorafiLogo} alt="sorafi logo" height={120} width={120} />
      <div className={`${poppins.className} my-10 w-3/5 text-center text-xl`}>
        <h2 className="text-center text-4xl font-medium">Introducing Sorafi</h2>
        <p className="mx-auto mt-10 xl:w-1/2">
          The decentralized wallet that lets you securely manage crypto and
          digital assets with confidence.
        </p>
        <ToastFail />
        <ToastNotify />
        <ToastSuccess />
        <ToastWarn />
      </div>
    </div>
  );
};

export default Home;
