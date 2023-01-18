import React from 'react'
import style from './Header.module.scss'

type Headerprops={
    click: () => void
}


const Header = ({click}:Headerprops) => {
  return (
    <div className={style.container}>
        <img src="https://img.icons8.com/color/48/null/chat--v1.png" onClick={()=>{click()}}/>
    </div>
  )
}

export default Header