import './NavBar.scss'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import React from 'react'
import clsx from 'clsx'

export const NavBar = () =>{

  const [activeList, setActiveList] = useState(null)

  const toggleActiveList = (listName) =>{
    setActiveList(activeList === listName ? null : listName)
  }

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.col')) {
        setActiveList(null);
      }
    };
    document.addEventListener('click', handleDocumentClick);
  
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return(
  <div className="container-fluid nav-bar-module">
    <div className='main'>
      <div className='row align-items-center'>
        <div className='col logo'>
          <img className='logo-img' src='./logo.png'/>
        </div>
        <div className='col firma' onClick={()=>toggleActiveList('firma')}>
          <h5>Firma</h5>
        </div>
        <div className='col szkolenia' onClick={()=>toggleActiveList('szkolenia')}>
          <h5>Szkolenia</h5>
        </div>
        <div className='col kontakt' onClick={()=>toggleActiveList('kontakt')}>
          <h5>Kontakt</h5>
        </div>
        <div className='col odnosnik'>
          <button>Formularz kontaktowy</button>
        </div>
      </div>
    </div>
    <div className={clsx('row lists', {active: activeList !== null })}>
      <div className={clsx('firma-list',{active: activeList === 'firma'})} >
        <ul>
          <li>O nas</li>
          <li>Nasi trenerzy</li>
          <li>Opinie klientów</li>
        </ul>
      </div>
      <div className={clsx('szkolenia-list', {active: activeList === 'szkolenia'})}>
        <ul>
          <li>szkolenia stacjonarne</li>
          <li>szkolenia zdalne</li>
          <li>szkolenia z dojazdem do klienta</li>
        </ul>
      </div>
      <div className={clsx('kontakt-list',{active: activeList === 'kontakt'})}>
        <ul>
          <li>O nas</li>
          <li>Nasi trenerzy</li>
          <li>Opinie klientów</li>
        </ul>
      </div>
    </div> 
    <div className='login'>
      <NavLink to={'/user'}>
        <h4 >Z</h4> 
      </NavLink> 
    </div>
    
  </div>
  )
}