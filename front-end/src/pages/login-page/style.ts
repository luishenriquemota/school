import styled from "styled-components";

export const ContentLoginStyle = styled.div`
  max-width: 100vw;
  height: calc(100% - (40px + (0.8rem * 2)));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2{
    margin-bottom: 50px;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 30px;

    input{
      width: 300px;
      height: 30px;
      padding: 0 10px;
      border: none;
      border-radius: 4px;
      background-color: var(--grey1);
    }

    button{
        height: 30px;
        border: none;
        border-radius: 15px;
        color: white;
        background-color: #0B0D0D;
        cursor: pointer;

        font-size:16px;
        font-weight: 600;
        
        :hover{
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
  }
`
