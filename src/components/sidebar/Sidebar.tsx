import React from 'react'
import style from './Sidebar.module.scss'


type Sidebarprops={
    open:boolean
}

const Sidebar = ({open}:Sidebarprops) => {
  return (
    <div className={open? `${style.container} ${style.collapse}`: `${style.container}`}>
        <ul>
            <li>hello</li>
            <li>hello</li>

            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
 
        </ul>
    </div>
  )
}

export default Sidebar