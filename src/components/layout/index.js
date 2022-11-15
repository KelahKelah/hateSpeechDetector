// import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrap } from './style'
import { Header } from '../header'
// import { Loader } from "../loader"

const Layout = () => {
  return (
    <LayoutWrap>
       <Header />
       <Outlet />
    </LayoutWrap>
  );
};
export { Layout };