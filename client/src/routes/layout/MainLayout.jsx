import React from "react";
import LeftBar from "../../components/leftBar/leftBar";
import Gallery from "../../components/gallery/gallery";
import { Outlet } from "react-router";
import './MainLayout.css'
import TopBar from "../../components/topBar/TopBar";


const MainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
       <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;
