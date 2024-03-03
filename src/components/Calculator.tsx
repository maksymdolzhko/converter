"use client";
import moment from "moment";
import Image from "next/image";
import ValueForm from "@/components/ValueForm";
import Arrows from "../../public/arrows.svg";
import Button from "@/components/Button";
import InputDate from "@/components/InputDate";
import { useEffect, useMemo, useState } from "react";
import { AppCurrency, CurrencyResponse } from "@/types";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import updateCurrency, { getCurrencyHistory } from "@/api/actions";
import { ActionType } from "@/api/types";
import { useCurrency, useCurrencyHistory } from "@/store";
import { uniqInd } from "@/utils";

interface CalculatorProps {
  defaultData: CurrencyResponse;
  defaultBalanceCurrency: AppCurrency;
  defaultPurchaseCurrency: AppCurrency;
}

interface IFilters {
  balance: number;
  purchase: number;
  dateValue: string;
  balanceCurr: AppCurrency;
  purchaseCurr: AppCurrency;
}

const Calculator = ({
  defaultData,
  defaultBalanceCurrency,
  defaultPurchaseCurrency,
}: CalculatorProps) => {
  const { dataCurrency, fetchCurrency } = useCurrency((state) => ({
    fetchCurrency: state.fetchCurrency,
    dataCurrency: state.dataCurrency,
  }));
  const { addHistory } = useCurrencyHistory((state) => ({
    addHistory: state.addHistory,
  }));

  const today = moment().format("YYYY-MM-DD");
  const [data, setData] = useState<CurrencyResponse>(defaultData);
  const [filters, setFilters] = useState<IFilters>({
    balance: 0,
    purchase: 0,
    dateValue: today,
    balanceCurr: defaultBalanceCurrency,
    purchaseCurr: defaultPurchaseCurrency,
  });
  const [firstRender, setFirstRender] = useState<boolean>(true);
  useEffect(() => {
    if (!firstRender) {
      fetchCurrency(defaultBalanceCurrency, defaultPurchaseCurrency);
    }
    return () => {
      if (firstRender) {
        setFirstRender(false);
      }
    };
  }, [filters.balanceCurr, filters.purchaseCurr]);

  useEffect(() => {
    if (!firstRender) {
      const fetchData = async () => {
        const formatedDate = filters.dateValue.replaceAll("-", "/");
        const data = await getCurrencyHistory(
          filters.purchaseCurr,
          formatedDate
        );

        setData({
          ...data,
          conversion_rate: data.conversion_rates[filters.balanceCurr],
        });
      };

      fetchData().catch(console.error);
    }
    return () => {
      if (firstRender) {
        setFirstRender(false);
      }
    };
  }, [filters.dateValue]);

  const calculated = useMemo(() => {
    return (filters.balance * data.conversion_rate).toFixed(2);
  }, [filters.balance, filters.balanceCurr, data]);

  const handlerToggle = () => {
    const { purchaseCurr, balanceCurr } = filters;

    setFilters({
      ...filters,
      [ActionType.balanceCurr]: purchaseCurr,
      [ActionType.purchaseCurr]: balanceCurr,
    });
  };

  const handlerUpdate = () => updateCurrency();
  const handlerFilter = (param: string | AppCurrency, type: ActionType) => {
    setFilters({
      ...filters,
      [type]: param,
    });
  };
  const handlerSave = (): void =>
    addHistory({
      id: uniqInd(),
      balance: filters.balance,
      purchase: filters.purchase,
      date: filters.dateValue,
      balanceCurr: filters.balanceCurr,
      purchaseCurr: filters.purchaseCurr,
    });

  return (
    <div className="bg-[#F6F7FF] py-12">
      <div className="mx-auto max-w-[860px] bg-[#fff] px-12 py-12">
        <h2 className="text-[40px] font-semibold leading-[56px] text-gray-900 mb-10">
          Конвертер валют
        </h2>
        <div className="flex flex-row gap-4 mb-4">
          <p>
            <strong>1 {filters.purchaseCurr} </strong>
            <span>
              ={" "}
              {!dataCurrency
                ? data.conversion_rate
                : dataCurrency.conversion_rate}{" "}
            </span>
            <span>{filters.balanceCurr}</span>
          </p>
          <Button className="px-1 py-1" onClick={handlerUpdate}>
            <ArrowPathIcon width={20} />
          </Button>
        </div>

        <div className="flex flex-row gap-x-10 ">
          <ValueForm
            label={"В мене є:"}
            valueAmount={String(filters.balance)}
            valueCurrency={filters.balanceCurr}
            handlerAmount={(value) => handlerFilter(value, ActionType.balance)}
            handlerCurrency={(value) =>
              handlerFilter(value, ActionType.balanceCurr)
            }
          />
          <Button className="px-1 py-1 !bg-transparent" onClick={handlerToggle}>
            <Image src={Arrows} alt="" className="mt-6" />
          </Button>
          <ValueForm
            label={"Хочу придбати:"}
            valueAmount={String(calculated)}
            valueCurrency={filters.purchaseCurr}
            handlerAmount={(value) => handlerFilter(value, ActionType.purchase)}
            handlerCurrency={(value) =>
              handlerFilter(value, ActionType.purchaseCurr)
            }
          />
        </div>

        <div className="flex flex-row justify-between mt-4">
          <InputDate
            value={filters.dateValue}
            handler={(value) => handlerFilter(value, ActionType.dateValue)}
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
