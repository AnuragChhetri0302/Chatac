import React from 'react'
import style from './Backdrop.module.scss'


type Backdropprops={
    open:boolean,
    click: () => void

}
const Backdrop = ({click,open}:Backdropprops) => {
  return (
    <div  className={open? `${style.container} ${style.container_open}`: `${style.container}`} onClick={()=>{click()}}>
      
    </div>
  )
}

export default Backdrop