import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

export const PrivateRouters = () => {
  return (
    <Routes>
      <Route index exact element={<Home />} />
    </Routes>
  );
};
