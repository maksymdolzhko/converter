"use client";
import Image from "next/image";
import ValueForm from "@/components/ValueForm";
import Arrows from "/public/arrows.svg";
import { useEffect, useMemo, useState } from "react";
import { AppCurrency, CurrencyResponse } from "@/types";
import updateCurrency from "@/api/actions";
import { useCurrency, useCurrencyHistory } from "@/store";
import { uniqInd } from "@/utils";
import Rate from "./Rate";
import Button from "@/components/Button";
import InputDate from "@/components/InputDate";
import { useCalculator } from "@/hooks/useCalculator";

interface CalculatorProps {
  defaultData: CurrencyResponse;
}

const Calculator = ({ defaultData }: CalculatorProps) => {
  const {
    date,
    balance,
    calculated, 
    balanceCurr,
    purchaseCurr,
    dataCurrency,

    handlerChangeDate,
    handlerChangeBalance,
    handlerChangeBalanceCurr,
    handlerChangePurchaseCurr,
    handlerUpdate,
    handlerSave,
    handlerToggle,
  } = useCalculator(defaultData);

  return (
    <div className="bg-[#F6F7FF] py-12">
      <div className="mx-auto max-w-[860px] bg-[#fff] px-12 py-12">
        <h2 className="text-[40px] font-semibold leading-[56px] text-gray-900 mb-10">
          Конвертер валют
        </h2>

        <Rate
          data={dataCurrency}
          balanceCurr={balanceCurr}
          purchaseCurr={purchaseCurr}
          handlerUpdate={handlerUpdate}
        />

        <div className="flex flex-row gap-x-10 ">
          <ValueForm
            label="В мене є:"
            valueAmount={String(balance)}
            valueCurrency={balanceCurr}
            handlerAmount={handlerChangeBalance}
            handlerCurrency={handlerChangeBalanceCurr}
          />

          <Button className="px-1 py-1 !bg-transparent" onClick={handlerToggle}>
            <Image src={Arrows} alt="" className="mt-6" />
          </Button>

          <ValueForm
            label={"Хочу придбати:"}
            valueAmount={String(calculated)}
            valueCurrency={purchaseCurr}
            handlerAmount={() => {}}
            handlerCurrency={handlerChangePurchaseCurr}
          />
        </div>

        <div className="flex flex-row justify-between mt-4">
          <InputDate
            value={date}
            handler={handlerChangeDate}
            customClass={"w-[220px]"}
          />
          <Button
            label="Зберегти результат"
            className="px-10"
            onClick={handlerSave}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
