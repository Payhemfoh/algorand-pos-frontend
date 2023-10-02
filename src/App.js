import React from 'react';
import NavBar from './Components/NavBar/navbar';
import UserManagement from './Components/User/user';
import VoucherManagement from './Components/Voucher/index';
import ResetPassword from './Components/User/resetpassword';
import DeleteUser from './Components/User/deleteuser';
import AddUser from './Components/User/adduser';
import EditUser from './Components/User/edituser';
import DeleteVoucher from './Components/Voucher/deletevoucher';
import AddVoucher from './Components/Voucher/addvoucher';
import GetVoucher from './Components/Voucher/getvoucher';
import RedeemVoucher from './Components/Voucher/redeemvoucher';
import Home from './Components/Home/home'
import Login from './Components/Login/login';
import useToken from './Components/Token/token'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Button, darkColors, lightColors } from 'react-floating-action-button'
import './App.css';

const FABStyle = {
  width: 100 + "%",
  height: 75 + "px",
  borderRadius: 15 + "px",
  backgroundColor: darkColors.lighterRed,
  color: lightColors.white,
  fontSize: 25 + "px"
}

const App = () => {
  const { setToken, clearToken, token, role } = useToken();

  const LogOut = () => {
    clearToken();
    window.location = "/";
  }

  const LogIn = token => {
    setToken(token);
    window.location = "/";
  }

  const LogOutFAB = () => {
    if (!token) return (<div></div>);

    return (
      <Container className="LogOutFAB">
        <Button styles={FABStyle} onClick={LogOut}> LogOut </Button>
      </Container >
    )
  }

  if (!token) {
    return <Login setToken={LogIn} />;
  }

  return (
    <Router>
      <NavBar role={role} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/voucher" element={<VoucherManagement />} />
        <Route path="/voucher/add" element={<AddVoucher />} />
        <Route path="/voucher/get" element={<GetVoucher />} />
        <Route path="/voucher/delete" element={<DeleteVoucher />} />
        <Route path="/voucher/redeem" element={<RedeemVoucher />} />
        <Route path="/user" element={<UserManagement />} />
        <Route path="/user/adduser" element={<AddUser />} />
        <Route path="/user/edituser" element={<EditUser />} />
        <Route path="/user/deleteuser" element={<DeleteUser />} />
        <Route path="/user/resetpassword" element={<ResetPassword />} />
        <Route path="/logout" Component={LogOut} />
      </Routes>
      <LogOutFAB />
    </Router>
  );
}

export default App;
