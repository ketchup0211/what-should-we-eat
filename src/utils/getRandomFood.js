import getRandomNumber from "./getRandomNumber";

export default function getRandomFood(foods) {
  //Weight와 날씨를 고려하지 않은 랜덤 로직
  if (foods !== null && Array.isArray(foods)) {
    const randomIdx = getRandomNumber(0, foods.length);
    let randomFood = foods[randomIdx];

    const variantsIdx = getRandomNumber(0, randomFood.variants.length);
    const variants = randomFood.variants[variantsIdx].detail;

    let result = randomFood.name;
    if (variants !== "기본") {
      result = variants + result;
    }
    return result;
  } else {
    alert("상한 음식 데이터 감지! 개발자에게 문의하세요.");
  }
}
