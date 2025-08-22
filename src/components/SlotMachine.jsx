import useRandomFood from "../hooks/useRandomFood";

export default function SlotMachine({ foods }) {
  const { randomFood, pickRandomFood } = useRandomFood(foods);
  return (
    <div>
      <h1>{randomFood}</h1>
      <button onClick={pickRandomFood}>랜덤 룰렛</button>
    </div>
  );
}
