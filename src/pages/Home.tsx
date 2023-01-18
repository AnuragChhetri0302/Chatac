import React, { useState } from 'react'
import Backdrop from '../components/backdrop/Backdrop'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Home = () => {
  const [open,setOpen]=useState<boolean>(false)
  function handleSidebar(){
      setOpen(!open)
  }
  return (
    <>
    <Header click={handleSidebar}/>
    <Backdrop click={handleSidebar} open={open}/>
    <Sidebar open={open}/>
    </>
  )
}

export default Home