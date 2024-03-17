import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Comming from "./Components/Pages/Comming/Comming";

function Authented() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Comming" element={<Comming />} />
      </Routes>
    </>
  );
}

export default Authented;
