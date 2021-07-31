import React, { useState } from 'react';

import {Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose} from 'react-icons/ai';
import {Sidebaritem}  from '../Sidebaritem';
import '../App.css';
const Sidebar = () => {
    const [sideb,setSideb]= useState(false);
    const shosidebar =()=>setSideb(!sideb);
    
    return (
      <>
          <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <FaBars  onClick={shosidebar} />
          </Link>
          </div>
          <nav className={sideb?'nav-menu active':'nav-menu'}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                
              </li>
              {
                Sidebaritem.map((item,index)=>{
                    return(
                      <li key={index}>
                        <Link to={item.path}>
                        {item.icons}
                        <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                })
              }
            </ul>
          </nav>
        
          </>
        );
}

export default Sidebar;
