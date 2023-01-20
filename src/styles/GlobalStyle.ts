import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #F2F2F2;
    --color-background-2: #D1DCE32E;
    --color-background-3: #FFFFFF;
    
    --color-border: #D1DCE3;
    --color-border-input: #DDE6E9;
    --color-border-input-focus: #66AFE9;

    --color-text: #656565;
    --color-text-input: #000000;
    --color-blue-text: #3D75BB;
    --color-blue-text-2: #5D9CEC;
    --color-error-text: #CECECE;

    --color-error-icon: #ce1a2c;
    --color-timeout-icon: #e0b109;
    
    --font-family: 'Raleway', sans-serif;
   
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
 background-color: var(--color-background);
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

input{
  background: transparent;
}

input:focus{
  outline: none;
}

input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}

input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}
`;
