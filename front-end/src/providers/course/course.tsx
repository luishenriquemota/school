import { createContext, useContext, useState} from "react"
import { IChildren, ICourseRequest, ICourseResponse } from "../../interfaces"
import { api } from "../../services/api"
import { useUser } from "../user/user";

interface ICourseProviderProps{
  createCourse: (data: ICourseRequest) => void;
  listAllCourses: () => void;
  registerInCourse: (id_course: string) => void;
  courses: ICourseResponse[]

}

const CourseContext = createContext<ICourseProviderProps>({} as ICourseProviderProps)

export function CourseContextProvider({children}: IChildren){
  const [courses, setCourses] = useState<ICourseResponse[]>([])
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
    api.patch(`/api/course/signup/${id_course}`, {headers:{authorization: `Bearer ${token}`}}).then(res => {

    })
    .catch(err => {

    })
  }

  return (
    <CourseContext.Provider value={{createCourse, listAllCourses, registerInCourse, courses}}>
      {children}
    </CourseContext.Provider>
  )
}

export const useCourse = () => useContext(CourseContext)
