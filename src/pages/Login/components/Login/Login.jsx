import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='formlogin'>
    <form id="login-form" class="centerlogin" action="" method="post">
    <h3 class="text-center text-info"><img className='img-emp' src="images/logo-exatcon.png" alt=""/></h3>
    <div class="form-group">
        <label for="username" class="text-info">Usuário:</label><br/>
        <input type="text" name="username" id="username" class="form-control"/>
    </div>
    <div class="form-group">
        <label for="password" class="text-info">Senha:</label><br/>
        <input type="text" name="password" id="password" class="form-control"/>
    </div>
    <div class="text-left">
        <label for="remember-me" class="text-info"><span>Lembre-me</span><span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
        <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
    </div>
    <div id="register-link" class="text-right">
        <a href="./kanban" class="text-info">Registra aqui</a>
    </div>
</form>
</div>
  )
}

export default Login