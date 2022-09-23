import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/login";

const App = () => {
  <ChakraProvider>
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login"  replace }/> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  </ChakraProvider>;
};

export default App;
