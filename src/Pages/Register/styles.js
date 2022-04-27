import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey4);

`

export const FormContainer = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey3);
  color: var(--grey0);
  width: 92.5%;

  h1 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  form {
    width: 89%;
    height: 55vh;
  }

  label {
    font-size: 12px;
    color: var(--grey0);
    margin-bottom: 2%;
  }

  input {
    padding: 0 13px;
    height: 38.5px;
    border: 1px solid var(--grey2);
    background-color: var(--grey2);
    color: var(--grey1);
    border-radius: 1px;
  }

  input:focus {
    border: 1px solid var(--grey1);
    background-color: var(--grey3);
    outline: 0
  }

  button {
    color: var(--grey0);
    padding: 0 13px;
    height: 38.5px;
  }

  span {
    color: var(--grey1);
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width:768px) {
    width: 400px;
    margin: 30px auto;
  }

`

export const FormDivEmail = styled.div `
  padding: 10px 0;
  width: 88%;
`

export const FormDivSenha = styled.div `
  padding: 10px 0;
  width: 88%;
`

export const DivImgButton = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92.5%;
  margin-top: 20px;
  margin-bottom: 10px;

  button {
    padding: 2px 19px;
    height: 4.5vh;
    background-color: var(--grey3);
    color: var(--grey0);
    font-size: 10px;
  }

  @media screen and (min-width:768px) {
    width: 400px;
  }

`

export const DivH1Span = styled.div `

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--grey0);
    margin-bottom: 10%;
  }

  span {
    color: var(--grey1);
    margin-bottom: 7%
  }
`

export const Select = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  select {
    background-color: var(--grey2);
    color: var(--grey1);
    width: 88%;
    padding: 0 13px;
    height: 38.5px;
    border: 1px solid var(--grey2);
    border-radius: 1px;
  }

  select:focus {
    border: 1px solid var(--grey1);
    background-color: var(--grey3);
    outline: 0
  }

  label {
    font-size: 12px;
    color: var(--grey0);
    margin-bottom: 1%;
    width: 88%;
    margin-top: 1%;
  }

  button {
    background-color: var(--pinkNegative);
    color: var(--grey0);
    width: 88%;
    margin: 5% 0;
  }


`