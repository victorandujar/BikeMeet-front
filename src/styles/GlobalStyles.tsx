import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #fff;
  font-family: ${(props) => props.theme.fonts.primary};
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

a, :visited, :active{
text-decoration: none;
color: ${(props) => props.theme.colors.thirdColorText}
}
`;

export default GlobalStyles;
