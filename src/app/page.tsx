import { Path } from "@/constants/path";
import Image from "next/image";
import Link from "next/link";
import homeimage from "../../public/image.png";

export default function Home() {
  return (
    <div className="my-20 max-w-[860px] mx-auto">
      <div className="flex flex-row gap-12">
        <div className="flex flex-col gap-4 w-1/2 justify-center">
          <h2 className="text-[40px] leading-[56px] font-bold">
            Конвертер валют
          </h2>
          <p className="text-[20px] text-[#707C87] leading-[28px] font-normal">
            Переважна діяльність банківської групи за останні чотири звітні
            квартали становить 50 і більше відсотків.
          </p>
          <Link
            href={Path.CONVERTOR}
            className="w-max bg-[#2C36F2] hover:bg-[#2C36F2]/[.8] text-[#fff] hover:text-[#fff]/[.8] text-[18px] leading-[25px] font-medium py-6 px-8 rounded-[3px] mt-3"
          >
            Конвертувати валюту
          </Link>
        </div>
        <div className="w-1/2">
          <Image src={homeimage} priority alt="" className="" />
        </div>
      </div>
    </div>
  );
}
