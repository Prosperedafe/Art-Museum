import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Collections from "./components/collections";
import Member from "./components/member";
import Masters from "./components/masters";
import Exhibition from "./components/exhibition";
import Visit from "./components/visit";
import Cart from "./components/cart";
import Basket from "./components/basket";

const App = () => {

  return (
    <div className="app">
        <BrowserRouter>  
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
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
    
  )
};
export default App;
