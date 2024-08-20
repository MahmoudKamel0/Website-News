import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";

export default function Layout() {
       return (
       <React.StrictMode>
              <Header></Header>
              <Outlet></Outlet>
       </React.StrictMode>
       )
}
