import { useEffect } from "react";
import { useCourse } from "../../providers/course/course";
import { CardCourse } from "../card-courses";
import { CoursesStyle } from "./style";

export function Courses(){
  const {courses, listAllCourses} = useCourse()

  useEffect(() => {
    listAllCourses()
    
  }, [])

  return (
    <CoursesStyle className="container">
      <h2>Cursos em alta</h2>
      <ul>
        {courses.map((item, index) => <CardCourse key={index} name={item.name} description={item.description} teacher={item.teacher} id={item.id}/>)}
      </ul>

    </CoursesStyle>
  )
}