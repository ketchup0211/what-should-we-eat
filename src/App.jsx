import { useState } from "react";
import foods from "./data/foods.json";
import getRandomFood from "./utils/getRandomFood";

function App() {
  let randomFood = getRandomFood(foods);
  return (
    <>
      <div>
        <h1>{randomFood}</h1>
      </div>
    </>
  );
}

export default App;
