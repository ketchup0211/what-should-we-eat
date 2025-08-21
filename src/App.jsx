import { useState } from "react";
import foods from "./data/foods.json";

function App() {
  function getRandomFood(foods) {
    //Weight와 날씨를 고려하지 않은 랜덤 로직
  }
  return (
    <>
      <div>{getRandomFood(foods)}</div>
    </>
  );
}

export default App;
