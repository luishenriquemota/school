
import {createBrowserRouter, Navigate} from "react-router-dom";
import { Header } from "../components/header";
import { Home } from "../pages/home";
import { LandingPage } from "../pages/LandingPage";
import { LearningPage } from "../pages/learningPage/indext";
import { LoginPage } from "../pages/login-page";
import { RegisterPage } from "../pages/register-page" ;


const auth = true
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    children: [
      {
        path: "/",
        element: <Header/>
      }
    ]
  },
  {
    path: "/home",
    element: auth ? <Home/> : <Navigate to="/"/>,
    
  },
  {
    path: "/login",
    element: <LoginPage/>,
    children: [
      {
        path: "/login",
        element: <Header/>
      }
    ]
  },
  {
    path: "/register",
    element: <RegisterPage/>,
    children: [
      {
        path: "/register",
        element: <Header/>
      }
    ]
  },
  {
    path: "/home/my_courses/learning",
    element: <LearningPage/>
  }
]);
