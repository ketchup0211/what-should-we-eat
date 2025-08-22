import useRandomFood from "../hooks/useRandomFood";
import styled from "styled-components";

export default function SlotMachine({ foods }) {
  const { randomFood, pickRandomFood } = useRandomFood(foods);
  return (
    <Container>
      <p>오늘의 메뉴는</p>
      <Result>{randomFood}</Result>
      <Button onClick={pickRandomFood}>랜덤 룰렛</Button>
    </Container>
  );
}

//styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Result = styled.h1`
  padding: 10px;
  font-size: 42px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const Button = styled.button`
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  padding: 15px;
  margin: 10px;

  &:hover {
    filter: brightness(0.95);
  }
`;
