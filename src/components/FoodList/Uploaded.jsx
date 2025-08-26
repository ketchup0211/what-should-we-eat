import getCurrentFoodList from "../../utils/getCurrentFoodList";

export default function Uploaded() {
  return (
    <div>
      <p>현재 음식 리스트 목록</p>
      {getCurrentFoodList().map((food, id) => {
        return <p key={id}>{food}</p>;
      })}
    </div>
  );
}
