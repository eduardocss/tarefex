import React from "react";
import "./NavLateral.css";

function NavLateral() {
  return (
    <div className="form-navbar">
        <div class="middle">
      <a href="./kanban" class="btn btn3"><img src="..\images\icones\kanban.png" alt="" className="icons" />Kanban</a>
      <a href="./tarefas" class="btn btn4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="..\images\icones\tarefa.png" alt="" className="icons" />Tarefas</a>
    </div>
    </div>
  );
}

export default NavLateral;
