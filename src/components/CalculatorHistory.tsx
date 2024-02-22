import Button from "@/components/Button";
import { Currency } from "@/constants/currency";
import HistoryItem from "@/components/HistoryItem";

const history = [
  {
    id: 1,
    date: "22/02/2024",
    from: 1000,
    fromCurr: Currency.UAH,
    to: 36.65,
    toCurr: Currency.USD,
  },
  {
    id: 2,
    date: "20/02/2024",
    from: 1000,
    fromCurr: Currency.UAH,
    to: 36.65,
    toCurr: Currency.USD,
  },
  {
    id: 3,
    date: "17/02/2024",
    from: 1000,
    fromCurr: Currency.UAH,
    to: 36.65,
    toCurr: Currency.USD,
  },
  {
    id: 4,
    date: "10/02/2024",
    from: 1000,
    fromCurr: Currency.UAH,
    to: 36.65,
    toCurr: Currency.USD,
  },
  {
    id: 5,
    date: "25/01/2024",
    from: 1000,
    fromCurr: Currency.UAH,
    to: 36.65,
    toCurr: Currency.USD,
  },
];
const CalculatorHistory = () => {
  return (
    <div className="bg-[#FFF] py-12">
      <div className="mx-auto max-w-[860px] bg-[#F6F7FF] px-12 py-12">
        <div className="flex flex-row justify-between items-center mb-6">
          <h2 className="text-[28px] font-semibold leading-[40px] text-gray-900">
            Очистити історію
          </h2>
          <Button label="Зберегти результат" className="py-4 px-10" />
        </div>

        <div className="grid grid-cols-2 row-span-3 gap-4">
          {history.map((item) => {
            return <HistoryItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CalculatorHistory;
