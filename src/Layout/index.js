import React from "react";
import AppBar from "./AppBar";
import SideBar from "./SideBar";

const layout = (Component) => ({...props}) => (
    <div>
      <AppBar />
      <SideBar />
      <div style={{ position: "absolute", left: "340px" }}>
        <Component {...props}/>
      </div>
    </div>
  );

export default layout;
