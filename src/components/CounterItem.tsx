import { useState } from "react";

interface CounterItemProps {
  value: number;
  onIncrement:()=>void
}

const CounterItem = ({ value ,onIncrement }: CounterItemProps) => {
  const [count, setCount] = useState<number>(value);

  const handleCount = (): void => {
    setCount((prev) => prev + 1);
    onIncrement()
  };

  return (
    <div className="flex flex-col items-center gap-4 border-2 w-36 px-7 py-4 rounded-xl shadow-md">
      <p className="text-lg font-semibold">{count}</p>
      <button
        onClick={handleCount}
        className="bg-blue-700 text-white px-3 py-1 rounded-lg hover:bg-blue-800"
      >
        Increment
      </button>
    </div>
  );
};

export default CounterItem;
