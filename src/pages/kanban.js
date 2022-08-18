import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import NavLateral from "../components/NavLateral/NavLateral";

import GlobalStyle from "../styles/global";

import Board from "./Kanban/Board";
import Lateral from "./Tarefas/Lateral/Lateral";

function Kanban() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Board/>
      <NavLateral/>
      <GlobalStyle />
      <Lateral/>
    </DndProvider>
  );
}

export default Kanban;
