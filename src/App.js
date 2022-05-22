import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Header/Navbar";
import Home from "./Pages/Main/Home/Home";

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
