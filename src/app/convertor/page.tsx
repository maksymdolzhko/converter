import { getCurrency } from "@/api/actions";
import { initGetCurrency } from "@/api/constants";
import Calculator from "@/components/Calculator";
import CalculatorHistory from "@/components/CalculatorHistory";

export default async function Convertor() {
  const data = await getCurrency(
    initGetCurrency.initTarget,
    initGetCurrency.initBase
  );

  return (
    <div className="flex flex-col w-full">
      <Calculator defaultData={data} />
      <CalculatorHistory />
    </div>
  );
}
