import React, { useContext } from 'react';
import { ContextGlobal } from '../utils/Provider';
import './footer.css';

const Footer = () => {

  const {state} = useContext(ContextGlobal);

  const theme= state.isDark ? 'dark-footer' : 'light-footer';

  return (
    <footer className={`${theme}`}>
    <div className='red-line'>

    </div>

    <div className='container-father'>
      <div className='container-footer-logo'>
        <p>Powered by</p>
        <img className='logo' src="/images/DH.png" alt='DH-logo' />
      </div>

      <figure className='social-network'>
        <img src="/images/ico-facebook.png" alt="facebook icon" />
        <img src="/images/ico-instagram.png" alt="instagram icon" />
        <img src="/images/ico-tiktok.png" alt="tiktok icon" />
        <img src="/images/ico-whatsapp.png" alt="whatsapp icon" />
      </figure>
    </div>
      
    </footer>
  )
}

export default Footer