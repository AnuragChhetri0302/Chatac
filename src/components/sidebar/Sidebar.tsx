import React, { useState } from 'react'
import Chats from '../chats/Chats'
import Header from './header/Header'
import style from './Sidebar.module.scss'


type Sidebarprops={
    open:boolean
}

const Sidebar = ({open}:Sidebarprops) => {
  
  return (
    <div className={open? `${style.container} ${style.collapse}`: `${style.container}`}>
        <Header/>
        <Chats/>
    </div>
  )
}

export default Sidebar