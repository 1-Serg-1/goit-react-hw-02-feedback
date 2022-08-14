import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
   font-family: Roboto, sans-serif;
   background-color: ${p => p.theme.colors.background};
   text-align: center;
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
 }
 ul {
    margin: 0;
    padding: 0;
    list-style: none;
 }
 button {
   border-radius: 5px;
   cursor: pointer;
   &:hover, &:focus {
      background-color: blue;
      color: white;
   }
 }
`;
