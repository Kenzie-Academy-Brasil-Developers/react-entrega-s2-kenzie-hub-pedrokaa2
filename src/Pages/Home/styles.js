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

  @media screen and (min-width:768px) {
    width: 700px;
    margin: 30px auto;
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

  @media screen and (min-width:768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      margin-top: 0;
      margin-right: 4%;
    }
    
    h1 {
      margin-left: 2%;
    }

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
  margin-bottom: 4%;

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

export const TechOutsideMap = styled.div `
  background-color: var(--grey3);
  display: flex;
  width: 93.5vw;
`

export const MapTech = styled.div `
  display: flex;
  color: var(--grey0);
  background-color: var(--grey4);
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  width: 90%;
  margin-top: 4%;
  margin-bottom: 4%;
  height: 40px;
  padding: 20px;
  border-radius: 1px;

  span {
    color: var(--grey1);
  }

  :focus {
    background-color: var(--grey2)
  }
`