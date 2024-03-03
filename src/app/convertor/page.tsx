import { AppCurrency } from "@/types";
import { getCurrency } from "@/api/actions";
import Calculator from "@/components/Calculator";
import CalculatorHistory from "@/components/CalculatorHistory";

const defaultBalanceCurrency = AppCurrency.UAH;
const defaultPurchaseCurrency = AppCurrency.USD;

export default async function Convertor() {

  const data = await getCurrency(
    defaultPurchaseCurrency,
    defaultBalanceCurrency,
  )

  return (
    <div className="flex flex-col w-full">
        <Calculator
          defaultData={ data }
          defaultBalanceCurrency={ defaultBalanceCurrency }
          defaultPurchaseCurrency= {defaultPurchaseCurrency }
        />
        <CalculatorHistory/>
    </div>
  );
}
