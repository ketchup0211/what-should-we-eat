import foods from "../data/foods.json";

export default function getCurrentFoodList() {
  let foodList = [];
  const isVarientExist = (name) => {
    const food = foods.find((food) => food.name === name);
    if (!food) return false;
    return food.variants.some((variant) => variant !== "기본");
  };

  foods.forEach((food) => {
    if (!isVarientExist(food.name)) foodList.push(food.name);
    else {
      const foodArr = food.variants.map((variant) => {
        if (variant == "기본") return food.name;
        else {
          return food.name + variant.detail;
        }
      });
      foodList.push(...foodArr);
    }
  });
  return foodList;
}
