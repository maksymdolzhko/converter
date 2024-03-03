"use client";
import Button from "@/components/Button";
import HistoryItem from "@/components/HistoryItem";
import { useCurrencyHistory } from "@/store";

const CalculatorHistory = () => {
  const { history, clearHistory } = useCurrencyHistory((state) => ({
    history: state.history,
    clearHistory: state.clearHistory,
  }));

  const handlerClear = () => clearHistory();

  return (
    <div className="bg-[#FFF] py-12">
      <div className="mx-auto max-w-[860px] bg-[#F6F7FF] px-12 py-12">
        <div className="flex flex-row justify-between items-center mb-6">
          <h2 className="text-[28px] font-semibold leading-[40px] text-gray-900">
            Історія конвертації
          </h2>
          <Button
            label="Очистити історію"
            className="py-4 px-10"
            onClick={handlerClear}
          />
        </div>

        <div className="grid grid-cols-2 row-span-3 gap-4">
          {!history.length && <p>
            Список транзакцій покищо пустий.
          </p> }
          
          {history.map((item) => (
            <HistoryItem
              key={item.id}
              date={item.date}
              from={item.balance}
              to={item.purchase}
              fromCurr={item.balanceCurr}
              toCurr={item.purchaseCurr}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorHistory;
