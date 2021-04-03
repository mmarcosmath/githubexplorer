import { createGlobalStyle } from "styled-components";
import githubBackground from '../assets/background.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    color: #465a6c;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }


  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
  }   
  
  button {
    cursor: pointer;
  }
  `;
