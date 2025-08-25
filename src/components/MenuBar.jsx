import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <Container>
      <MenuLink to="/" title="홈으로">
        밥상공론
      </MenuLink>

      <MenuLink to="/food-list" title="밥상 후보 선정하러 가기">
        메뉴판 수정
      </MenuLink>

      <MenuLink to="/custom-rulet" title="원하는 메뉴로 밥상 차리기">
        내맘대로 밥상
      </MenuLink>

      <MenuLink to="/about" title="메뉴 선정에 진심인 개발자에 대해">
        개발자 나와라
      </MenuLink>
    </Container>
  );
}

const Container = styled.div`
  background-color: green;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  &:hover {
    filter: opacity(0.7);
    transition: 0.2s ease;
  }
  &:active {
    color: white;
    transform: scale(0.8);
  }
`;
