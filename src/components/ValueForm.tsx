import Selector from "@/components/Selector";
import { AppCurrency } from "@/types";
import { ChangeEvent } from "react";

interface IFormProps {
  label: string;
  disabledInput?: boolean;

  valueAmount: string;
  valueCurrency: AppCurrency;

  handlerAmount: (param: string) => void;
  handlerCurrency: (param: AppCurrency) => void;
}
// e: ChangeEvent<HTMLInputElement>
const ValueForm = ({
  label = "",
  disabledInput = false,
  valueAmount,
  valueCurrency,
  handlerAmount,
  handlerCurrency,
}: IFormProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handlerAmount(e.target.value);
  };

  return (
    <div className="max-w-[356px]">
      <label>{label}</label>
      <div className="w-ful flex flex-row gap-4 justify-between mt-2">
        <input
          type="text"
          readOnly={disabledInput}
          placeholder="0"
          value={valueAmount}
          onChange={onChange}
          className={`w-[215px] min-h-[60px] min-w-0 rounded-[4px] text-center border border-[#C1C2CA] px-4 py-2 text-[20px] font-semibold leading-[28px] text-gray-900`}
        />
        <Selector
          valueCurrency={valueCurrency}
          handlerCurrency={handlerCurrency}
        />
      </div>
    </div>
  );
};

export default ValueForm;
