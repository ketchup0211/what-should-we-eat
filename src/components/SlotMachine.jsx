import { useEffect, useState } from "react";
import useRandomFood from "../hooks/useRandomFood";
import Button from "./common/Button";
import styled from "styled-components";

export default function SlotMachine({ foods }) {
  const { randomFood, pickRandomFood } = useRandomFood(foods);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    let timeOutID;
    if (clicked) {
      timeOutID = setTimeout(() => {
        pickRandomFood("...");
        pickRandomFood();
        setClicked(false);
      }, 2000);
    }
    return () => clearTimeout(timeOutID);
  }, [clicked]);

  return (
    <Container>
      <p>오늘의 메뉴는</p>
      <Result>{randomFood}</Result>
      {clicked ? (
        <ButtonContainer>
          <Button innerText="싫어!" onClick={pickRandomFood} />
          <Button innerText="맛있겠다!" />
        </ButtonContainer>
      ) : (
        <Button innerText="랜덤 룰렛" onClick={handleClick} />
      )}
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Result = styled.h1`
  padding: 10px;
  font-size: 42px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
