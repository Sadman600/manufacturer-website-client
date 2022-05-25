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
import MyProfile from "./Pages/Main/Dashboard/MyProfile";
import MyOrders from "./Pages/Main/Dashboard/MyOrders";
import ManageAllOrders from "./Pages/Main/Dashboard/ManageAllOrders";
import ManageProducts from "./Pages/Main/Dashboard/ManageProducts";
import AddProduct from "./Pages/Main/Dashboard/AddProduct";
import AllUser from "./Pages/Main/Dashboard/AllUser";
import RequireAdmin from "./Pages/Main/Login/RequireAdmin";
import AddReview from "./Pages/Main/Dashboard/AddReview";
import UpdateProfile from "./Pages/Main/Dashboard/UpdateProfile";
import MyPortfolio from "./Pages/Main/MyPortfolio/MyPortfolio";
function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="/purchase/:purchaseId" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile />}></Route>
          <Route path='updateProfile' element={<UpdateProfile />}></Route>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='allorders' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
          <Route path='allproducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='alluser' element={<RequireAdmin><AllUser /></RequireAdmin>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
