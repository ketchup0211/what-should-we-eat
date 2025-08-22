import { useState } from "react";
import foods from "../data/foods.json";
import getRandomFood from "../utils/getRandomFood";

export default function SlotMachine() {
  const [randomFood, setRandomFood] = useState("?");
  const onClick = () => {
    setRandomFood(getRandomFood(foods));
  };
  return (
    <>
      <div>
        <h1>{randomFood}</h1>
        <button onClick={onClick}>랜덤 룰렛</button>
      </div>
    </>
  );
}
