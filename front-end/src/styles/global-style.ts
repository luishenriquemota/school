import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Inter', sans-serif;
}

:root{
  --grey1: #DEE2E6;
  
}


.App{
  max-width: 100vw;
  height: 100vh;
}


.container{
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.8rem;
}

.container.small{
  max-width: 800px;
}


`