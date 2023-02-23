import styled from "styled-components"

export const CardCourseStyle = styled.li`
  max-width:200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: black;

  h1{
    font-size: 18px;
  }

  span{
    font-size: 18px;
  }

  button{
    border: none;
    border-radius: 4px;
    width: 40%;
    height: 25px;
    cursor: pointer;
    :hover{
      background-color: #5126EA;
    }
  }


`