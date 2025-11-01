import CounterItem from "./CounterItem";
import type { CounterItemType } from "../types/CounterItemType";
import { useState } from "react";

interface CounterListProps {
  items: CounterItemType[];
}

const CounterList = ({ items }: CounterListProps) => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 border-2 px-7 py-2 w-60">
        Total Count: {count}{" "}
      </h1>
      <div className="flex justify-around flex-wrap gap-6 mt-10">
        {items.map((item, index) => (
          <CounterItem
            key={index}
            value={item.value}
            onIncrement={handleIncrement}
          />
        ))}
      </div>
    </div>
  );
};

export default CounterList;

// import CounterItem from "./CounterItem"

// interface CounterListProps {
//   totalCount:number;
// }

// const CounterList = ({totalCount}:CounterListProps) => {
//   return (

//     <div className="flex justify-around">
//         {totalCount.map((item, index) => (
//           <CounterItem key={index} totalCount={item} />
//         ))}

//     </div>
//     // <div>
//     //   {data.map(())}
//     //   <CounterItem value={0}/>
//     // </div>
//   )
// }

// export default CounterList
