import React from 'react'
import { Link } from 'react-router-dom'
import style from './Style.module.scss'

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.textCenter}>
          <h2>Chatac </h2>
          <span>Login</span>
        </div>
        <div className={style.inputData}>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className={style.inputData}>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <button>Login</button>
        <p>New User? <Link to={'/register'}>Register</Link></p>
      </div>

    </div>
  )
}

export default Login