import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Collections from "./components/collections";
import Member from "./components/member";
import Masters from "./components/masters";
import Exhibition from "./components/exhibition";
import Visit from "./components/visit";
import Cart from "./components/cart";
import Basket from "./components/basket";
import Navbar from "./components/navbar";

const App = () => {

  return (
    <>
      <div className="message"><h1>This site is only avaliable for moblie viewers</h1> </div>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/member" element={<Member />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
};
export default App;
