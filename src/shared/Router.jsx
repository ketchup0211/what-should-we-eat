import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FoodList from "../pages/FoodList";
import CustomRulet from "../pages/CustomRulet";
import About from "../pages/About";
import MenuBar from "../components/MenuBar";
import styled from "styled-components";

export default function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <MenuBar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food-list" element={<FoodList />} />
            <Route path="/custom-rulet" element={<CustomRulet />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Main>
      </AppLayout>
    </BrowserRouter>
  );
}
const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
