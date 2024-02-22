import Image from "next/image";
import Currency from "@/components/Currency";
import Arrows from "../../public/arrows.svg";
import Button from "@/components/Button";
import InputDate from "@/components/InputDate";

const Calculator = () => {
  return (
    <div className="bg-[#F6F7FF] py-12">
      <div className="mx-auto max-w-[860px] bg-[#fff] px-12 py-12">
        <h2 className="text-[40px] font-semibold leading-[56px] text-gray-900 mb-10">
          Конвертер валют
        </h2>

        <div className="flex flex-row gap-x-10 ">
          <Currency label={"В мене є:"} />
          <Image src={Arrows} alt="" className="mt-6" />
          <Currency label={"Хочу придбати:"} />
        </div>

        <div className="flex flex-row justify-between mt-4">
          <InputDate customClass={"w-[220px]"} />
          <Button label="Зберегти результат" className="px-10" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
