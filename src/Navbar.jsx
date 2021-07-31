import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './new.css'
import {BiHome} from 'react-icons/bi';
import {GiNewShoot} from 'react-icons/gi';
import {FcAbout }from 'react-icons/fc';

const Navbar = ({show}) => {
    const [showNav,setShowNav] =useState(false)
    return (
        <div className={show ?'sidenav active':'sidenav'}>
           <ul  onClick={()=>setShowNav(!showNav)}>
               <li>
                   <a href="/"><BiHome/> home</a>
               </li>
               <li>
                   <a href="/news"><GiNewShoot/>news</a>
               </li>
                <li>
                   <a href="/about">< FcAbout/>about</a>
               </li>
           </ul> 
        </div>
    );
}

export default Navbar;
