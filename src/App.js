import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Header/Navbar";
import Home from "./Pages/Main/Home/Home";
import Login from "./Pages/Main/Login/Login";
import RequireAuth from "./Pages/Main/Login/RequireAuth";
import SignUp from "./Pages/Main/Login/SignUp";
import Purchase from "./Pages/Main/Purchase/Purchase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Main/Dashboard/Dashboard";
function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:purchaseId" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
