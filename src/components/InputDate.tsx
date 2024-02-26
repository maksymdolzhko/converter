import { memo } from "react";
import Image from 'next/image';
import Calendar from '../../public/cabinet.svg';
import moment from "moment";

interface IDateProps{
  customClass: string;
  value: string;
  handler: (param: string) => void;
}
const InputDate = ({customClass = '', value, handler}:IDateProps) => {
  return (
    <div className="relative float-left">
    <input 
      type="date"
      value={value}
      max={moment().format('YYYY-MM-DD')}
      onChange={(e) => handler(e.target.value)}
      className={`${customClass} min-h-[60px] min-w-0 rounded-[4px] text-center border border-[#C1C2CA] px-4 py-2 text-[20px] font-semibold leading-[28px] text-gray-900`}
    />
    <span className="absolute top-[10px] right-[10px] pointer-events-none bg-white px-2 pt-2">
      <button type="button">
        <Image
            src={Calendar}
            alt=''
        />
      </button>
    </span>
  </div>
  );
};

export default memo(InputDate);
