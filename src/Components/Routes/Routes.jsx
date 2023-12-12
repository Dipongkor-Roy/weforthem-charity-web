import { createBrowserRouter } from "react-router-dom";
import Hero from "../Hero/Hero";
import LogIn from "../LogIn/LogIn";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Donation from "../Donation/Donation";
import Event from "../Event/Event";
import Admin from "../Admin/Admin";



export const router = createBrowserRouter([
    { path:'/',
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Hero/>
        },
        {
            path:'/logIn',
            element:<LogIn/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:'/donation',
            element:<Donation/>
        },
        {
            path:"/events",
            element:<Event/>
        },
        {
            path:"/admin",
            element:<Admin/>
        }
        
    ],


    }])