import { useState } from "react";
import getRandomFood from "../utils/getRandomFood";

export default function useRandomFood(foods) {
  const [randomFood, setRandomFood] = useState("?");
  const pickRandomFood = () => {
    setRandomFood(getRandomFood(foods));
  };
  return { randomFood, pickRandomFood };
}
