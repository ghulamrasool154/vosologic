import { Whatwedo, Compareus, Home } from "../pages/Pages";
import { Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Whatwedo" element={<Whatwedo />} />
        <Route path="/Compareus" element={<Compareus />} />
      </Routes>
    </>
  );
};

export default Routing;
