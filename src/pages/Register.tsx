import React from 'react'
import { Link } from 'react-router-dom'
import style from './Style.module.scss'

const Register = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.textCenter}>
          <h2>Chatac </h2>
          <span>Register</span>
        </div>

        <div className={style.inputData}>
          <label htmlFor="displayName">Display Name</label>
          <input type="text" />
        </div>
        <div className={style.inputData}>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className={style.inputData}>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div className={style.inputImg}>
          <label htmlFor="upload">Add Avatar
          <img src="https://img.icons8.com/color/48/null/add-image.png"/></label>
          
          <input type="file" id="upload" name="img" accept="image/jpg image/png" hidden/>

        </div>

        <button>Register</button>
        <p>Already Register? <Link to={'/login'}>Login</Link></p>
      </div>

    </div>
  )
}

export default Register