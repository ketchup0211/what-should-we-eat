import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Uploaded from "./Uploaded";

export default function MenuBoard() {
  const DISPLAY = {
    INIT: "",
    UPLOADED: "uploaded",
    NEW: "new",
    HOLD: "hold",
  };
  const [display, setDisplay] = useState(DISPLAY.INIT);
  const onClick = (event) => {
    setDisplay(event.target.id);
  };

  const components = {
    [DISPLAY.UPLOADED]: <Uploaded />,
    [DISPLAY.NEW]: <Uploaded />,
    [DISPLAY.HOLD]: <Uploaded />,
  };

  return (
    <Container>
      {display === DISPLAY.INIT ? (
        <>
          <Title>메뉴판</Title>
          <Lists>
            <List id={DISPLAY.UPLOADED} onClick={onClick}>
              업로드된 메뉴들
            </List>
            <List id={DISPLAY.NEW} onClick={onClick}>
              신메뉴 구경하기
            </List>
            <List id={DISPLAY.HOLD} onClick={onClick}>
              보류 상태인 메뉴들
            </List>
          </Lists>
        </>
      ) : (
        components[display] || null
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: gray;
  width: 350px;
  height: 600px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3.4rem;
  padding: 5px;
  margin: 10px;
  position: absolute;
  top: 20%;
`;

const Lists = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const List = styled(Link)`
  font-size: 1.5rem;
  padding: 5px 0px;
  text-decoration: none;
  color: black;
  &:active {
    color: whitesmoke;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease;
  }
`;
