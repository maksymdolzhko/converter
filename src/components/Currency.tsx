import { memo } from "react";
import Selector from "@/components/Selector";

interface ICurrencyProps {
  label: string;
  value: string;
  handler: (param: string) => void;
}
const Currency = ({ label = "", value, handler }: ICurrencyProps) => {
  return (
    <div className="max-w-[356px]">
      <label>{label}</label>
      <div className="w-ful flex flex-row gap-4 justify-between mt-2">
        <input
          type="text"
          placeholder="0"
          value={value}
          onChange={e=>handler(e.target.value)}
          className={`w-[215px] min-h-[60px] min-w-0 rounded-[4px] text-center border border-[#C1C2CA] px-4 py-2 text-[20px] font-semibold leading-[28px] text-gray-900`}
        />

        <Selector />
      </div>
    </div>
  );
};

export default memo(Currency);
