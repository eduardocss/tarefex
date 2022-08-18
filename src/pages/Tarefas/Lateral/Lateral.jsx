import React from 'react'
import "./Lateral.css";



function Lateral() {
  return (
    <div class="offcanvas offcanvas-end form-tarefa" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <div className="form-int-tarefa">
      <h1 className="titulo">Nova Tarefa</h1>
        <div class="custom-lines">
      <label>
        <span>Tarefa</span>
        <input type="text" class="input_text input-tarefas" id="tarefa" />
      </label>
      </div>

      <div class="custom-lines">
      <label>
        <span>Departamento</span>
        <select name="departamento" className="select-tarefas">
          <option value="Fiscal"  selected>Fiscal</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Contabil">Contábil</option>
        </select>
      </label>
</div>

<div class="custom-lines">
      <label>
        <span>Periodicidade</span>
        <select name="periodicidade" className="select-tarefas">
          <option value="Eventual"  selected>Eventual</option>
          <option value="Diario">Diario</option>
          <option value="Semanal">Semanal</option>
          <option value="Mensal">Mensal</option>
          <option value="Semestral">Semestral</option>
          <option value="Anual">Anual</option>
        </select>
      </label>
      </div>

      <div class="custom-lines">
      <label>
        <span>Cliente</span>
        <input type="text" class="input_text input-tarefas" id="cliente" />
      </label>
      </div>
      <button>Enviar</button>
      </div>
    </div>

      </div>
  )
}

export default Lateral