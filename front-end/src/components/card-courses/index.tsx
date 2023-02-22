import { CardCourseStyle } from "./style";
import image from "../../assets/curso.jpeg"


interface ICardCourse{
  name: string;
  description: string;
  teacher: string;
}


export function CardCourse({name, description, teacher}: ICardCourse){

  return(
    <CardCourseStyle>
      <img src={image} alt="curso" />
      <h1>{description}</h1>
      <span>{name}</span>
      <button>inscrever-se</button>
    </CardCourseStyle>
  )
}