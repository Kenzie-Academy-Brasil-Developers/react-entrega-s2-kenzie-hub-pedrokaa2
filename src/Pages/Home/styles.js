import styled from "styled-components";

export const Container = styled.div `
   display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey4);
`

export const DivImgButton = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92.5%;
  margin-top: 6%;
  margin-bottom: 5%;

  button {
    padding: 2px 19px;
    height: 4.5vh;
    background-color: var(--grey3);
    color: var(--grey0);
    font-size: 10px;
    border-radius: 4px;
  }
`