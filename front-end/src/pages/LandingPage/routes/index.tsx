
import {createBrowserRouter, Navigate} from "react-router-dom";
import { Header } from "../../../components/header";
import { Home } from "../../home";
import { LandingPage } from "..";
import { LoginPage } from "../../login-page";
import { RegisterPage } from "../../register-page";


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
  }
]);
