import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #fff;
  font-family: var(--main-font);
  min-height: 100vh;
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

:root {
  --main-color-button: #0D23AF;
  --main-color-text: #fff;
  --secondary-color-text: #000;
  --third-color-text: #0D23AF;
  --main-font: "Inter", sans-serif;
  --secondary-font: "Montserrat";
}

a, :visited, :active{
text-decoration: none;
color: var(--third-color-text)
}
`;

export default GlobalStyles;
