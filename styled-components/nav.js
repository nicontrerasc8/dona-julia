import styled from "styled-components";

export const Nav = styled.nav`
     padding: 1rem 5vw;
     background-color: var(--main);
     color: var(--contrast);
     font-family: 'Rubik', sans-serif;
     position: fixed;
     width: 100vw;
     z-index: 2;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     box-shadow: 0 0 10px var(--contrast);
`