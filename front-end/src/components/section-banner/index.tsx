import { BannerStyle } from "./style";
  import img from "../../assets/study_corte.png"


export function Banner(){

  return(
    <BannerStyle className="container">
      <div>
        <h2>Aprenda com a experiência deles</h2>
        <p>Nossos instrutores têm conhecimento real para ajudar você a alcançar suas metas.</p>
      </div>
        < img src={img} alt="" />
    </BannerStyle>
  )

}