import Dashboard from '../Components/Dashboard'
import Create from '../Components/Create'
import Home from '../Components/Home'
import View from '../Components/View'
import Topbar from '../Components/Topbar'
import { Navigate } from 'react-router-dom'

const AppRouter=[
    {
        path:'/',
        element:<><Topbar/><Home/></>
    },
    {
        path:'/dashboard',
        element:<><Topbar/><Dashboard/></>
    },
    {
        path:'/create',
        element:<><Topbar/><Create/></>
    },
    {
        path:'/blog/:id',
        element:<><Topbar/><View/></>
    },
    {
        path:'/*',
        element:<Navigate to='/' />
    }
    
]

export default AppRouter