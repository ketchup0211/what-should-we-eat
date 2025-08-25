import { useEffect, useState } from "react";
import useRandomFood from "../hooks/useRandomFood";
import Button from "./common/Button";
import styled from "styled-components";

export default function SlotMachine({ foods }) {
  const { randomFood, pickRandomFood } = useRandomFood(foods);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(false);
    setClicked(true);
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
      {clicked ? (
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
