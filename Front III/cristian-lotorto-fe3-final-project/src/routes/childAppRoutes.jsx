import React from 'react'
import Favs from './favs/Favs'
import Contact from './contact/Contact'
import Home from './home/Home'
import Detail from './detail/Detail'
import { Navigate } from 'react-router-dom'

export const childAppRoutes = [
    {
        index: true,
        element: <Navigate to='/home' replace= {true} />
    },
    {
        path: '*',
        element: <Navigate to='/home' replace= {true} />
    },
    {
        path: 'home',
        element: <Home /> 
    },
    {
        path: 'contact',
        element: <Contact /> 
    },
    {
        path: 'favs',
        element: <Favs /> 
    },
    {
        path: 'home/detail/:id',
        element: <Detail /> 
    }
]
