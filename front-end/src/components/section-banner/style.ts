import styled from "styled-components";


export const BannerStyle = styled.section`
  height: min(40vw, 400px);
  background: rgb(239,90,45);
  background: linear-gradient(135deg, rgba(239,90,45,1) 58%, rgba(222,226,230,1) 58%);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* margin-top: 10px; */

  img{
   height: min(40vw, 400px);
  }

  div{
    display: flex;
    flex-direction: column;
    gap: 4px;

    h2{
      font-size: max(18px, 4vw);
    }

    p{
      font-size: max(12px, 3vw);
    }
  }


  @media (min-width: 768px){
    justify-content: space-around;

    div{
      width: 350px;
      padding: 30px;
      justify-content: center;
      gap: 10px;
      background-color: white;

      h2{
        font-size: 30px;
      }
      p{
        font-size: 18px;
      }
    }
  }
`