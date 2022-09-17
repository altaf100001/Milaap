import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

import LendPage from "./LendPage";

import Donate from "./Donate";
import SingleDonate from "../Donate/SingleDonate";

import { SignUP } from "./SignUp";
import { LogIn } from "./Login";

import ContactUs from "./ContactUs";
import SuccessPayment from "./SuccessPayment";
import Price from "../Pricing/Price";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/donate" element={<Donate />} />
      <Route path="/donate/:id" element={<SingleDonate />} />
      <Route path="/fund" element={<LendPage />} />

      <Route path="/register" element={<SignUP />} />
      <Route path="/login" element={<LogIn />} />

      <Route path="/pricing" element={<Price />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/SuccessPayment" element={<SuccessPayment />} />
    </Routes>
  );
};

export default MainRoutes;
