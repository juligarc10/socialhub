import { Route, Routes } from "react-router-dom";
import Test from "../components/Test";
import Home from "../components/Home";

export const PublicRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="test" element={<Test />} />
    </Routes>
  );
};
