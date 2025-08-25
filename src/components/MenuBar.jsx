import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <Container>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/food-list">FoodList</Link>
      </h1>
      <h1>
        <Link to="/custom-rulet">CustomRulet</Link>
      </h1>
      <h1>
        <Link to="/about">About</Link>
      </h1>
    </Container>
  );
}

const Container = styled.div`
  background-color: green;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
