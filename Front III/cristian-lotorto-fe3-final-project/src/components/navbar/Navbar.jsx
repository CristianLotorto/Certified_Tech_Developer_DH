import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextGlobal } from '../utils/Provider';
import { types } from '../utils/Reducer';
import './navbar.css';

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal);
  const theme = state.isDark ? 'dark' : 'light-nav'
  const buttonTheme = state.isDark ? 'light' : 'dark'

  return (
    <nav className={`${theme}`}>
      <div className='nav-container'>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='contact'>Contact</NavLink>
        <NavLink to='favs'>Favs</NavLink>

        <button 
        className={`${buttonTheme}`}
        onClick={ () => dispatch({type: types.changeTheme})}>
          Change theme
        </button>
      </div>
    </nav>
  )
}

export default Navbar