import styled from "styled-components";

export const ButtonDiv = styled.div `
  display: flex;
  flex-direction: column;
  
  button {
    background-color: ${(props) => (props.isGrey ? "var(--grey1)" : "var(--pinkPrimary)") }
  }
`