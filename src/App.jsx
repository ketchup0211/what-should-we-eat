import SlotMachine from "./components/SlotMachine";
import foods from "./data/foods.json";

function App() {
  return (
    <>
      <div>
        <SlotMachine foods={foods} />
      </div>
    </>
  );
}

export default App;
