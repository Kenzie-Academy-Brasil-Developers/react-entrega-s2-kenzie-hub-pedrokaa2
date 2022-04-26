import styled from "styled-components";

export const ModalContainer = styled.div `
  background-color: var(--grey3);
  color: var(--grey0);
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const H1ButtonDivModal = styled.div `
  background-color: var(--grey2);
  color: var(--grey0);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  padding: 10px, 16px;

  p {
    margin-left: 4.25%;
  }

  button {
    background-color: var(--grey2);
    color: var(--grey1);
    margin-right: 4.25%;
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
    width: 92.5%;
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
    margin-bottom: 2%;
    width: 92.5%;
    margin-top: 2%;
  }

  button {
    color: var(--grey0);
    width: 44vw;
    margin: 5% 3% 5% 0;
    height: 35px;
    padding: 3px 16px;
    border-radius: 3px;
  }
`

export const ButtonsDiv = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const buttonNegative = styled.button `
  background-color: var(--pinkNegative);
`

export const Input = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    background-color: var(--grey2);
    color: var(--grey1);
    width: 92.5%;
    padding: 0 13px;
    height: 38.5px;
    border: 1px solid var(--grey2);
    border-radius: 1px;
  }

  input:focus {
    border: 1px solid var(--grey1);
    background-color: var(--grey3);
    outline: 0
  }

  input::placeholder {
    color: var(--grey1);
  }
`