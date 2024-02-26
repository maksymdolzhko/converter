'use client'
import moment from 'moment';
import Image from "next/image";
import Currency from "@/components/Currency";
import Arrows from "../../public/arrows.svg";
import Button from "@/components/Button";
import InputDate from "@/components/InputDate";
import { useCallback, useState } from "react";

const Calculator = () => {
  const [balance, setBalance] = useState<string>('');
  const [toBuy, setToBuy] = useState<string>('');
  const [dateValue, setDateValue] = useState<string>(moment().format('YYYY-MM-DD'));


  const handlerBalance = useCallback((val: string) => {
    setBalance(val);
  }, [balance]);
  const handlerToBuy = useCallback((val: string) => {
    setToBuy(val);
  }, [toBuy]);
  const handlerSetDate = useCallback((val: string) => {
    setDateValue(val);
  }, [dateValue]);

  return (
    <div className="bg-[#F6F7FF] py-12">
      <div className="mx-auto max-w-[860px] bg-[#fff] px-12 py-12">
        <h2 className="text-[40px] font-semibold leading-[56px] text-gray-900 mb-10">
          Конвертер валют
        </h2>

        <div className="flex flex-row gap-x-10 ">
          <Currency
            label={"В мене є:"}
            value={balance}
            handler={handlerBalance}
          />
          <Image src={Arrows} alt="" className="mt-6" />
          <Currency label={"Хочу придбати:"}
            value={toBuy}
            handler={handlerToBuy}
          />
        </div>

        <div className="flex flex-row justify-between mt-4">
          <InputDate
            value = {dateValue}
            handler = {handlerSetDate}
            customClass={"w-[220px]"}
          />
          <Button label="Зберегти результат" className="px-10" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
