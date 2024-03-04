import Button from "@/components/Button";
import { AppCurrency, CurrencyResponse } from "@/types";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

interface IRate {
  data: CurrencyResponse;
  balanceCurr: AppCurrency;
  purchaseCurr: AppCurrency;
  handlerUpdate: () => void;
}

const Rate = ({ data, balanceCurr, purchaseCurr, handlerUpdate }: IRate) => {
  return (
    <div className="flex flex-row gap-4 mb-4">
      <p>
        <strong>{`1 ${purchaseCurr} = `}</strong>
        <span>{`${data.conversion_rate} ${balanceCurr}`}</span>
      </p>
      <Button className="px-1 py-1 flex flex-row gap-4" onClick={handlerUpdate}>
        <span>Update</span>
        <ArrowPathIcon width={20} />
      </Button>
    </div>
  );
};

export default Rate;
