import styled from "styled-components";

export default function MenuBoard() {
  return (
    <Container>
      <h1>메뉴판</h1>
      <ul>
        <li>업로드된 메뉴들</li>
        <li>신메뉴 구경하기</li>
        <li>보류 상태인 메뉴들</li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  background-color: gray;
  width: 40vw;
  height: 80vh;
`;
