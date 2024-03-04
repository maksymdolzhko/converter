import { AppCurrency } from "@/types";

export const API_KEY = "6ef5c4257794ac79b7b286aa";
export const API_PATH = "https://v6.exchangerate-api.com/v6";
export const API_HEADER = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export enum TagsCurrency {
  ACTUAL_CURRENCY = 'currency',
}

export const initGetCurrency = {
  initBase: AppCurrency.UAH,
  initTarget: AppCurrency.USD,
}
