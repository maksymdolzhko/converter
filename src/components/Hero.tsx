import Image from "next/image";
import Card from '../../public/card.png';
import HeroBg from '../../public/hero.png';
import { Path } from "@/constants/path";
export default function Hero(){
    return(
    <div className="overflow-hidden relative py-20">
        <div className="absolute inset-0">
            <Image
                src={HeroBg}
                alt=""
                fill
            />
        </div>
        <div className="mx-auto relative z-10 max-w-7xl px-6  lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:max-w-lg lg:pb-8 ">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Чіп Чендж
              </h1>
              <p className="mt-6 text-xl leading-8 text-white">
                  Обмінник валют - навчальний
              </p>
              <p className="mt-6 text-base leading-7 text-white">
                Anim aute id magna aliqua ad ad non deserunt sunt.
                Qui irure qui lorem cupidatat commodo.
              </p>
              <div className="mt-10 flex">
                <a
                  href={Path.CONVERTOR}
                  className="rounded-md bg-[#F6F7FF] text-[#707C87] hover:bg-[#ffffff] hover:text-gray-900 px-3.5 py-2.5 text-sm font-semibold shadow-sm"
                >
                  Конвертер валют
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <Image
                    src={Card}
                    width={340}
                    height={215}
                    alt=''
                    className="rounded-2xl object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    )
}  