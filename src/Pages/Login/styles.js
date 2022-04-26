import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey4);

  img {
    margin-bottom: 5%;
  }
`

export const FormContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey3);
  color: var(--grey0);
  width: 92.5%;

  h1 {
    margin-top: 11%;
    margin-bottom: 6%;
  }

  form {
    width: 89%;
    height: 55vh;
  }

  label {
    font-size: 12px;
    color: var(--grey1);
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
    padding: 10%;
  }

  a {
    text-decoration: none;
  }
`

export const FormDivEmail = styled.div `
  padding: 3% 0;
`

export const FormDivSenha = styled.div `
  padding-top: 3%;
  padding-bottom: 7%;
`

