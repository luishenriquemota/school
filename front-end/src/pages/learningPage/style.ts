import styled from "styled-components";


export const LearningngStyle = styled.div`
  background-color: #0B0D0D;
  color: white;
  height: 200px;

  .content{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 0px;

    h2{
      font-size: min(40px, 10vw);
      margin-top: 50px;
    }

    span{
      width: 130px;
      border-bottom: 6px solid white;
    }
  }

  .list_learning{
    margin-top: 40px;
    display: flex;
    gap: 20px;
    overflow-x: scroll;
  }

`