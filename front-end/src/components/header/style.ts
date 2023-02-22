import styled from "styled-components";

export const HeaderStyle = styled.header`
box-shadow: 0px 5px 8px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

`


export const HeaderContentStyle = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1{
    font-size: 19px;
    margin-right: 4vw;
  }

  input{
    height: 30px;
    width: 100%;

    padding: 0 2vw;

    border: none;
    border-radius: 15px;
    background-color: var(--grey1);
  }


  @media (min-width: 768px){
    justify-content: space-between;

    h1{
      margin: 0;
    }

    input{
      width: 60%;
    }

  }

`