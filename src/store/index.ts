import moment from "moment";
import { create } from "zustand";
import { getCurrency, getCurrencyHistory } from "@/api/actions";
import { AppCurrency, CurrencyResponse } from "@/types";
import { initGetCurrency } from "@/api/constants";

// CURRENCY STORE
interface IUseCurrency {
  date: string;
  changeDate: (value: string) => void;

  balance: number;
  changeBalance: (value: number) => void;

  purchase: number;
  changePurchase: (value: number) => void;

  balanceCurr: AppCurrency;
  changeBalanceCurr: (value: AppCurrency) => void;

  purchaseCurr: AppCurrency;
  changePurchaseCurr: (value: AppCurrency) => void;

  togglePareCurr: () => void;

  dataCurrency: CurrencyResponse | null;
  fetchCurrency: (base: AppCurrency, target: AppCurrency) => Promise<void>;
  fetchCurrencyByDate: (base: AppCurrency, date: string) => Promise<void>;
}

export const useCurrency = create<IUseCurrency>()((set) => ({
  date: moment().format("YYYY-MM-DD"),
  changeDate: (value) => set(() => ({ date: value })),

  balance: 0,
  changeBalance: (value) => set(() => ({ balance: value })),

  purchase: 0,
  changePurchase: (value) => set(() => ({ purchase: value })),

  balanceCurr: initGetCurrency.initBase,
  changeBalanceCurr: (value) => set(() => ({ balanceCurr: value })),

  purchaseCurr: initGetCurrency.initTarget,
  changePurchaseCurr: (value) => set(() => ({ purchaseCurr: value })),

  togglePareCurr: () =>
    set((state) => ({
      balanceCurr: state.purchaseCurr,
      purchaseCurr: state.balanceCurr,
    })),

  dataCurrency: null,
  fetchCurrency: async (base, target) => {
    const data = await getCurrency(base, target);
    set({ dataCurrency: data });
  },
  fetchCurrencyByDate: async (currency, date) => {
    const formatedDate = date.replaceAll("-", "/");
    const data = await getCurrencyHistory(currency, formatedDate);
    set((state) => ({
      dataCurrency: {
        ...data,
        conversion_rate: data.conversion_rates[state.balanceCurr],
      },
    }));
  },
}));

// HISTORY STORE
interface IHistory {
  id: string;
  date: string;
  balance: number;
  purchase: number;
  balanceCurr: AppCurrency;
  purchaseCurr: AppCurrency;
}

interface IUseHistory {
  history: IHistory[];
  clearHistory: () => void;
  addHistory: (item: IHistory) => void;
}
export const useCurrencyHistory = create<IUseHistory>()((set) => ({
  history: [],
  clearHistory: () =>
    set({
      history: [],
    }),
  addHistory: (item: IHistory) =>
    set((state) => ({
      history: [...state.history, item],
    })),
}));
