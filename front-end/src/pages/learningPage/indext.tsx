import { Header } from "../../components/header";
import { LearningngStyle } from "./style";
import { CardCourse } from "../../components/card-courses";
import { useCourse } from "../../providers/course/course";
import { useEffect } from "react";
import { useUser } from "../../providers/user/user";


export function LearningPage(){
  const {myCoursesStudent, listMyCoursesStudent} = useCourse()
  const {token} = useUser()

  useEffect(() => {
    listMyCoursesStudent()
  }, [])
console.log(myCoursesStudent)
  return (
    <>
    <Header/>
    <LearningngStyle>
      <div className="container small content">
        <h2>Meu Aprendizado</h2>
        <span>Todos os cursos</span>
        </div>
      <ul className="container small list_learning">
        {myCoursesStudent.map((item, index) => { 
          return <CardCourse key={index} name={item.name} description={item.description} teacher={item.teacher} id={item.id}/>
        })}
      </ul>
    </LearningngStyle>
    </>
  )


}