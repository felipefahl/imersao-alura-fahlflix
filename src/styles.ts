import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  --primary: #E53935;
  --black: #000000;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5;
  --white: #FFFFFF;
  --frontEnd: #6BD1FF;
  --backEnd: #00C86F;
}

#root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

html,
body {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
}`;
