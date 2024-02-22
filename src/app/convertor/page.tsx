import Calculator from "@/components/Calculator";
import CalculatorHistory from "@/components/CalculatorHistory";

export default function Convertor() {
  return (
    <div className="flex flex-col w-full">
      <Calculator />
      <CalculatorHistory />
    </div>
  );
}
