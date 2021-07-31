import React from 'react';
import {FaHackerNews,} from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';
import {AiFillHome} from 'react-icons/ai';
import {FcAbout} from 'react-icons/fc';

  export const Sidebaritem =[
     {
         title:'home',
         path:'/',
         icons:< AiFillHome/>
     },
     {
        title:'news',
        path:'/news',
        icons:< FaHackerNews/>
    },
    {
        title:'about',
        path:'/about',
        icons:<FcAbout/>
    },
    {
        title:'profile',
        path:'/profile',
        icons:< ImProfile/>
    }
 ]
 