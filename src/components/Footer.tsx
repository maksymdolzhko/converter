import { navigation } from "@/constants/navigation";
import { Path } from "@/constants/path";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Phone from "../../public/phone.svg";
import Phone2 from "../../public/phone2.svg";
import Link from "next/link";
import { firstLetterUpper } from "@/utils";

export default function Footer() {
  return (
    <footer className="bg-[#F6F7FF]">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-6">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="">
            <Link
              href={Path.BASE}
              className="flex flex-row gap-4 justify-start"
            >
              <Image src={Logo} alt="" className="h-8 w-auto" />
              <span className="text-lg font-semibold text-gray-900">
                Чіп Чендж
              </span>
            </Link>
            <p className="text-xs leading-6 text-[#707C87]">
              04128, м.Київ, вул. Хрещатик, 19
            </p>
            <p className="text-xs leading-6 text-[#707C87]">
              Ліцензія НБУ №156
            </p>
            <p className="text-xs leading-6 text-[#707C87]">
              Ⓒ ПАТ ЧіпЧендж, 2019-2023
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <ul className="space-y-4">
                {navigation.main.map((item) => {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        {firstLetterUpper(item.name)}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 md:mt-0">
                <div className="relative pl-9">
                  <div className="font-semibold text-gray-900">
                    <Image
                      src={Phone}
                      alt=""
                      className="h-5 w-auto absolute left-0 top-1 text-gray-900"
                    />
                    <span>3773</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-900">
                    Цілодобова підтримка
                  </p>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="relative pl-9">
                <div className="font-semibold text-gray-900">
                  <Image
                    src={Phone2}
                    alt=""
                    className="h-5 w-auto absolute left-0 top-1 text-gray-900"
                  />
                  <span>8 800 111 22 33</span>
                </div>
                <p className="mt-2 text-xs text-gray-900">
                    Безкожтовно для дзвінків в межах України
                </p>
              </div>
              <div className="mt-10 md:mt-0">
              <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                >
                  <item.icon className="h-6 w-6 text-gray-900"/>
                </Link>
              ))}
            </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
