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

export const H1Pdiv = styled.div `
  display: flex;
  flex-direction: column;
  background-color: var(--grey4);
  color: var(--grey0);
  border-top: 1px solid var(--grey2);
  border-bottom: 1px solid var(--grey2);
  padding: 25px 0px 25px 3.5%;
  width: 100%;

  p {
    margin-top: 10px;
    color: var(--grey1);
    font-weight: 400;
  }
`

export const H1ButtonDiv = styled.div `
  color: var(--grey0);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92.5%;
  margin-top: 4%;

  button {
    padding: 2px 13px;
    height: 4.5vh;
    background-color: var(--grey3);
    color: var(--grey0);
    font-size: 10px;
    border-radius: 4px;
    font-weight: 900;
    font-size: 22px;
  }
`