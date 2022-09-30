import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Collections from "./components/collections";
import Member from "./components/member";
import Masters from "./components/masters";
import Exhibition from "./components/exhibition";
import Shop from "./components/shop";
import Visit from "./components/visit";
import Cart from "./components/cart";
import Basket from "./components/basket";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/member" element={<Member />} />
      <Route path="/exhibition" element={<Exhibition />} />
      <Route path="/masters" element={<Masters />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};
export default Routing;
