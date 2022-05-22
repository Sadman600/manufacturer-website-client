import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Header/Navbar";
import Home from "./Pages/Main/Home/Home";
import Login from "./Pages/Main/Login/Login";
import Purchase from "./Pages/Main/Purchase/Purchase";

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
