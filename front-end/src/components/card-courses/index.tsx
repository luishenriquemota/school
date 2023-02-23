import { CardCourseStyle } from "./style";
import image from "../../assets/curso.jpeg"
import { useUser } from "../../providers/user/user";
import { useCourse } from "../../providers/course/course";


interface ICardCourse{
  id: string
  name: string;
  description: string;
  teacher: string;
}


export function CardCourse({name, description, teacher, id}: ICardCourse){

  const {registerInCourse} = useCourse()

  function registerInNewCourse(){
    registerInCourse(id)
  }

  return(
    <CardCourseStyle>
      <img src={image} alt="curso" />
      <h1>{description}</h1>
      <span>{name}</span>
      <button onClick={() => registerInNewCourse()}>inscrever-se</button>
    </CardCourseStyle>
  )
}