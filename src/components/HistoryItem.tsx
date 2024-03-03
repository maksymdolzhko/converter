import Image from "next/image";
import Arrow from "../../public/arrow.svg";
import { AppCurrency } from "@/types";

interface Props {
  date: string;
  from: number;
  to: number;
  fromCurr: AppCurrency;
  toCurr: AppCurrency;
}

const HistoryItem = ({ date, from, fromCurr, to, toCurr }: Props) => {
  return (
    <div className="flex flex-row gap-4 bg-[#fff] w-auto px-2 py-2 rounded-[4px]">
      <span className="text-[#C1C2CA]">{date}</span>
      <span className="text-[#707C87]">{from}</span>
      <span className="text-[#707C87]">{fromCurr.toUpperCase()}</span>
      <Image src={Arrow} alt="" className="" />
      <span className="text-[#707C87]">{to}</span>
      <span className="text-[#707C87]">{toCurr.toUpperCase()}</span>
    </div>
  );
};

export default HistoryItem;
