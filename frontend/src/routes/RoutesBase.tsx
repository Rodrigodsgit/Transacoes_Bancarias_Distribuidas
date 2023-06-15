import { Deposit } from "../pages/Deposit";
import { Home } from "../pages/Home";
import {Login} from "../pages/Login";
import { Payment } from "../pages/Payment";
import {SignUp} from "../pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransIn } from "../pages/TransIn";
import { TransEx } from "../pages/TransEx";

export const RoutesBase = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>                               
                <Route path="/signUp" element={<SignUp/>}/>                               
                <Route path="/home" element={<Home/>}/>                               
                <Route path="/deposit" element={<Deposit/>}/>                               
                <Route path="/payment" element={<Payment/>}/>                               
                <Route path="/transIn" element={<TransIn/>}/>                               
                <Route path="/transEx" element={<TransEx/>}/>                               
            </Routes>
        </BrowserRouter>
    );
};