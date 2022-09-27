import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Collections from "./components/collections";
import Navbar from "./components/navbar";
import Member from "./components/member";
import Masters from "./components/masters";
import Exhibition from "./components/exhibition";
import Shop from "./components/shop";

const App = () => {
  <Routes>
    <Navbar />
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<Login />} />
    <Route path="/collections" element={<Collections />} />
  </Routes>;
};

export default App;
