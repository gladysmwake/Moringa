import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Crazy from "./CrazyRoute";
import Page404 from "./Page404";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crazy" element={<Crazy />} />

        <Route path="*" element={<Page404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Routing;