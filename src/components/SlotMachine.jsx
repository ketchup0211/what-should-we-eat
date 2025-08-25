import { useEffect, useState } from "react";
import useRandomFood from "../hooks/useRandomFood";
import Button from "./common/Button";
import styled from "styled-components";

export default function SlotMachine({ foods }) {
  const { randomFood, pickRandomFood } = useRandomFood(foods);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(false);
    setLoading(true);
  };

  const handleSelect = () => {
    setSelected(true);
  };

  useEffect(() => {
    let timeOutID;
    if (loading) {
      timeOutID = setTimeout(() => {
        pickRandomFood();
        setLoading(false);
      }, 1000);
    }
    return () => clearTimeout(timeOutID);
  }, [loading]);

  return (
    <Container>
      <p>오늘의 메뉴는</p>
      <Result>
        {loading
          ? "고민하는 중..."
          : selected
          ? "오늘도 밥 맛있게 먹어!"
          : randomFood}
      </Result>
      {randomFood !== "?" ? (
        <ButtonContainer>
          <Button innerText="싫어!" onClick={handleClick} disabled={loading} />
          {selected ? null : (
            <Button
              innerText={"맛있겠다!"}
              onClick={handleSelect}
              disabled={loading}
            />
          )}
        </ButtonContainer>
      ) : (
        <Button
          innerText="랜덤 룰렛"
          onClick={handleClick}
          disabled={loading}
        />
      )}
    </Container>
  );
}

//styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
  padding: 30px;
  background-color: gainsboro;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Result = styled.h1`
  padding: 10px;
  font-size: 2.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
