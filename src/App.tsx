import "./App.css";
import CounterList from "./components/CounterList";
import type { CounterItemType } from "./types/CounterItemType";

function App() {



  const items: CounterItemType[] = [
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <CounterList items={items} />
    </div>
  );
}

export default App;
