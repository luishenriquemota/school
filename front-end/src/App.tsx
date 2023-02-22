import { Header } from "./components/header"
import {RouterProvider} from "react-router-dom";
import { Router } from './pages/LandingPage/routes';


function App() {

  return (
    <div className="App">
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
