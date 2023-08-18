import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { ContextGlobal } from '../utils/Provider';


export const Main = () => {

    const {state} = useContext(ContextGlobal);
    
    const theme = state.isDark ? 'dark-main' : 'light-main';

    useEffect(()=> {

      localStorage.setItem('favDentists', JSON.stringify(state.favDentists));

    },[state.favDentists])
    
  return (
    <main className= {`${theme}`}>

        <Outlet />

    </main>
  )
}
