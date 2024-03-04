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

/**
 * Todo:
 * import { useCalculator } from "@/hooks/useCalculator";
 * const {} = useCalculator(defaultData);
*/

interface CalculatorProps {
  defaultData: CurrencyResponse;
}

const Calculator = ({ defaultData }: CalculatorProps) => {
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const { balance, changeBalance } = useCurrency((state) => ({
    balance: state.balance,
    changeBalance: state.changeBalance,
  }));
  const { togglePareCurr } = useCurrency((state) => ({
    togglePareCurr: state.togglePareCurr,
  }));
  const { balanceCurr, changeBalanceCurr } = useCurrency((state) => ({
    balanceCurr: state.balanceCurr,
    changeBalanceCurr: state.changeBalanceCurr,
  }));
  const { purchaseCurr, changePurchaseCurr } = useCurrency((state) => ({
    purchaseCurr: state.purchaseCurr,
    changePurchaseCurr: state.changePurchaseCurr,
  }));
  const { date, changeDate } = useCurrency((state) => ({
    date: state.date,
    changeDate: state.changeDate,
  }));
  const { dataCurrency, fetchCurrency, fetchCurrencyByDate } = useCurrency(
    (state) => ({
      dataCurrency: state.dataCurrency,
      fetchCurrency: state.fetchCurrency,
      fetchCurrencyByDate: state.fetchCurrencyByDate,
    })
  );

  const { addHistory } = useCurrencyHistory((state) => ({
    addHistory: state.addHistory,
  }));

  useEffect(() => {
    if (!firstRender) {
      fetchCurrency(balanceCurr, purchaseCurr);
    }
    return () => {
      if (firstRender) {
        setFirstRender(false);
      }
    };
  }, [balanceCurr, purchaseCurr]);

  useEffect(() => {
    if (!firstRender) {
      fetchCurrencyByDate(purchaseCurr, date);
    }
    return () => {
      if (firstRender) {
        setFirstRender(false);
      }
    };
  }, [date]);

  const handlerChangeDate = (value: string) => changeDate(value);
  const handlerChangeBalance = (value: string) => changeBalance(Number(value));
  const handlerChangeBalanceCurr = (value: AppCurrency) =>
    changeBalanceCurr(value);
  const handlerChangePurchaseCurr = (value: AppCurrency) =>
    changePurchaseCurr(value);
  const handlerToggle = () => togglePareCurr();
  const handlerUpdate = () => updateCurrency();
  const handlerSave = (): void =>
    addHistory({
      id: uniqInd(),
      balance,
      purchase: Number(calculated),
      date,
      balanceCurr,
      purchaseCurr,
    });

  const calculated = useMemo(() => {
    const actualData = !dataCurrency ? defaultData : dataCurrency;
    const rate = actualData.conversion_rate;
    return (rate * balance).toFixed(2);
  }, [balance, balanceCurr, dataCurrency]);

  return (
    <div className="bg-[#F6F7FF] py-12">
      <div className="mx-auto max-w-[860px] bg-[#fff] px-12 py-12">
        <h2 className="text-[40px] font-semibold leading-[56px] text-gray-900 mb-10">
          Конвертер валют
        </h2>

        <Rate
          data={!dataCurrency ? defaultData : dataCurrency}
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
