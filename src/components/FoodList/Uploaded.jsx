import styled from "styled-components";
import getCurrentFoodList from "../../utils/getCurrentFoodList";

export default function Uploaded({ goToMenu }) {
  const foodList = getCurrentFoodList();
  return (
    <Container>
      <p onClick={goToMenu}>메뉴로 가기</p>
      <Title>현재 음식 목록 ({foodList.length})</Title>
      <FoodContainer>
        {foodList.map((food, id) => {
          return <Food key={id}>{food}</Food>;
        })}
      </FoodContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  padding: 30px 10px;
  position: sticky;
  top: 0px;
  background-color: gray;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 3;
`;
const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  font-size: 1.4rem;
  gap: 3px;
`;

const Food = styled.p`
  width: 100%;
  background-color: white;
  padding: 5px 30px;
  &:hover {
    cursor: pointer;
    filter: opacity(0.8);
  }
`;
