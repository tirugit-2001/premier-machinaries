import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Parent, Product } from "../pages";
const Approute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Parent />} path="/">
          <Route element={<Home />} index />
          <Route element={<Product />} path="product" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approute;
