"use client";
import { firstLetterUpper } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";

type Props = {
    name: string,
    href: string
}
const Navigation = ({items}:{items: Props[]}) => {
  const pathname = usePathname();

  return (
    <>
      {items.map((item: Props) => {
        const isActive = item.href === pathname;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`${!isActive? 'text-gray-900':'text-sky-800'} text-sm font-semibold leading-6`}
          >
            {firstLetterUpper(item.name)}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
