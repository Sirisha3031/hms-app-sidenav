import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData= [
{
    title:'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title:'Registration',
    path: '/registration',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title:'Outpatient',
    path: '/outpatient',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title:'Inpatient',
    path: '/inpatient',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title:'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
},
{
    title:'Labs',
    path: '/labs',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
}

]