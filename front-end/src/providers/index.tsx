import { IChildren } from "../interfaces";
import { CourseContextProvider } from "./course/course";
import { UserContextProvider } from "./user/user";





export const Providers = ({children}: IChildren) => {
  return( 
  <UserContextProvider>
    <CourseContextProvider>
      {children}
    </CourseContextProvider>
  </UserContextProvider>
   
  )
}