import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrap } from './style'
import { Header } from '../header'

const Layout = () => {
  
  return (
    <LayoutWrap>
       <Header />
       <Outlet />
    </LayoutWrap>
  );
};
export { Layout };