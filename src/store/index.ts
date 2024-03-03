import { getCurrency } from "@/api/actions";
import { AppCurrency, CurrencyResponse } from "@/types";
import { create } from "zustand";

interface IUseCurrency {
  balance: number;
  purchase: number;
  balanceCurr: AppCurrency;
  purchaseCurr: AppCurrency;
  dataCurrency: CurrencyResponse | null;
  fetchCurrency: (base: AppCurrency, target: AppCurrency) => Promise<void>;
}

export const useCurrency = create<IUseCurrency>()((set) => ({
  balance: 0,
  purchase: 0,
  balanceCurr: AppCurrency.UAH,
  purchaseCurr: AppCurrency.USD,
  dataCurrency: null,
  fetchCurrency: async (base, target) => {
    const data = await getCurrency(base, target);
    set({ dataCurrency: data });
  },
}));

interface IHistory {
  id: string,
  date: string;
  balance: number;
  purchase: number;
  balanceCurr: AppCurrency;
  purchaseCurr: AppCurrency;
}
interface IUseHistory {
  history: IHistory[];
  addHistory: (item: IHistory) => void;
  clearHistory: () => void;
}
export const useCurrencyHistory = create<IUseHistory>()((set) => ({
  history: [],
  addHistory: (item: IHistory) =>
    set((state) => ({
      history: [...state.history, item],
    })),
  clearHistory: () =>
    set({
      history: [],
    }),
}));
