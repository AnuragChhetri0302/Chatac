import React from 'react'
import { Link } from 'react-router-dom'
import style from './Style.module.scss'

const Error = () => {
  return (
    <div className={style.container}>
     <div className={style.card}>
     <h1>Something Went Wrong Please Login</h1>
     <Link to={'/login'}>Login</Link>
     </div>

    </div>
  )
}

export default Error