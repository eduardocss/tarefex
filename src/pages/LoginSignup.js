import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import GlobalStyle from "../styles/global";

import Login from "./Login/components/Login/Login";
import Header from "./Login/components/Header/Header";
import Footer from "./Login/components/Footer/Footer"
import MainLogin from "./Login/components/Main/Main";

function LoginSignup() {
  return (
    <DndProvider backend={HTML5Backend}>
<MainLogin/>
      <Login />
      <Header/>
      <Footer/>
      <GlobalStyle />
    </DndProvider>
  );
}

export default LoginSignup;
