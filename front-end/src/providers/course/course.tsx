import { Token } from "@mui/icons-material";
import { createContext, useContext, useState} from "react"
import { IChildren, ICourseRequest, ICourseResponse } from "../../interfaces"
import { api } from "../../services/api"
import { useUser } from "../user/user";

interface ICourseProviderProps{
  createCourse: (data: ICourseRequest) => void;
  listAllCourses: () => void;
  registerInCourse: (id_course: string) => void;
  listMyCoursesStudent: () => void;
  courses: ICourseResponse[]
  myCoursesStudent: ICourseResponse[]

}

const CourseContext = createContext<ICourseProviderProps>({} as ICourseProviderProps)

export function CourseContextProvider({children}: IChildren){
  const [courses, setCourses] = useState<ICourseResponse[]>([])
  const [myCoursesStudent, setMyCoursesStudend] = useState<ICourseResponse[]>([])
  const {token} = useUser()

  
  function createCourse(data: ICourseRequest){
    api.post("/api/course", data, {headers:{authorization: `Bearer ${token}`}}).then(res => {

    })
    .catch(err => {

    })
  }


  function listAllCourses(){
    api.get("api/course/").then(res => {
      setCourses(res.data)
    })
    .catch(err => {

    })

  }


  function registerInCourse(id_course: string){
    console.log(token)
    api.patch(`api/course/signup/${id_course}/`,
    {headers:{authorization: `Token ${token}`}}).then(res => {
  
    })
    .catch(err => {
      console.log(err)
    })
  }

  function listMyCoursesStudent(){
    api.get("api/course/my_courses/", {headers:{authorization: `Token ${token}`}}).then(res => {
      setMyCoursesStudend(res.data)
     

    })
    .catch(err => {

    })
  }

  return (
    <CourseContext.Provider value={{
      createCourse, 
      listAllCourses, 
      registerInCourse, 
      courses, 
      listMyCoursesStudent, 
      myCoursesStudent
      }}>
      {children}
    </CourseContext.Provider>
  )
}

export const useCourse = () => useContext(CourseContext)
