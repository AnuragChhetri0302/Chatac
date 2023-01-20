import React from 'react'
import style from './Header.module.scss'

type Headerprops={
    click: () => void
}


const Header = ({click}:Headerprops) => {
  return (
    <div className={style.container}>
        <button onClick={()=>{click()}} className={style.button} ><img src="https://img.icons8.com/color/48/null/chat--v1.png" alt='chat' /></button>
    </div>
  )
}

export default Header