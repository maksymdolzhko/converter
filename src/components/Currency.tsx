import Input from "@/components/Input";
import Selector from "@/components/Selector";

const Currency = ({label = ''}:{label: string}) => {
  return (
    <div className="max-w-[356px]">
      <label>
        {label}
      </label>
      <div className="w-ful flex flex-row gap-4 mt-2">
          <Input 
            customClass="w-[215px]"
          />
          <Selector />
      </div>
    </div>
  );
};

export default Currency;
