import SlotMachine from "../components/Home/SlotMachine";
import foods from "../data/foods.json";

export default function Home() {
  return <SlotMachine foods={foods} />;
}
