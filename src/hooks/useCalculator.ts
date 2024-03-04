import updateCurrency from "@/api/actions";
import { useCurrency, useCurrencyHistory } from "@/store";
import { AppCurrency, CurrencyResponse } from "@/types";
import { uniqInd } from "@/utils";
import { useEffect, useMemo, useState } from "react";

export const useCalculator = (defaultData: CurrencyResponse) =>{
    console.log('defaultData')
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
  
    return ({
        date,
        balance,
        calculated, 
        balanceCurr,
        purchaseCurr,
        dataCurrency: !dataCurrency? defaultData: dataCurrency,

        handlerChangeDate,
        handlerChangeBalance,
        handlerChangeBalanceCurr,
        handlerChangePurchaseCurr,
        handlerUpdate,
        handlerSave,
        handlerToggle,
    })
}