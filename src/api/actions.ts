"use server";
import { AppCurrency, CurrencyResponse } from "@/types";
import { EndpointCurrency } from "./endpoint";
import { API_HEADER, TagsCurrency } from "./constants";
import { revalidateTag } from "next/cache";

export default async function updateCurrency() {
  revalidateTag(TagsCurrency.ACTUAL_CURRENCY);
}

export async function getCurrency(
  base: AppCurrency,
  target: AppCurrency
): Promise<CurrencyResponse> {
  const response = await fetch(`${EndpointCurrency.PAIR}/${base}/${target}`, {
    ...API_HEADER,
    next: {
      tags: [TagsCurrency.ACTUAL_CURRENCY],
    },
  });
  if (response.status !== 200) throw new Error("Fetch error!");
  return response.json();
}

export async function getCurrencyHistory(
  currency: AppCurrency,
  date: string
): Promise<CurrencyResponse> {
  const response = await fetch(
    `${EndpointCurrency.HISTORY}/${currency}/${date}`,
    {
      ...API_HEADER,
    }
  );
  if (response.status !== 200) throw new Error("Fetch error!");
  return response.json();
}
