import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    
   
  }

*{
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  box-sizing: border-box;
  font-family: var(--font-family);
}

body{
 overflow-x: hidden;
 background-color: var(--gray-4);
}

::-webkit-scrollbar, ::-webkit-scrollbar-thumb {
    display: none;
}

button{
  cursor: pointer;
}

a{
  cursor: pointer;
  text-decoration: none;
}

ul,li{
 list-style: none;
 
}
`;
