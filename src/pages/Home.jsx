import SlotMachine from "../components/SlotMachine";
import foods from "../data/foods.json";

export default function Home() {
  return <SlotMachine foods={foods} />;
}
