import { Outlet } from "react-router-dom";
import { Banner } from "../../components/section-banner";
import { Courses } from "../../components/section-courses";


export function LandingPage(){

  return(
    <>
      <Outlet/>
      <Banner/>
      <Courses/>
    </>
  )
}