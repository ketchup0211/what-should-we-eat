import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FoodList from "./pages/FoodList";
import CustomRulet from "./pages/CustomRulet";
import About from "./pages/About";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-list" element={<FoodList />} />
        <Route path="/custom-rulet" element={<CustomRulet />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
