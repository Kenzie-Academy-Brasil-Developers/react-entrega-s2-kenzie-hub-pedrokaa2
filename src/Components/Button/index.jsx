import * as S from "./styles";

const Button = ({children, isGrey = false, onClick}) => {
  return (
    <S.ButtonDiv isGrey = {isGrey}>
      <button onClick={onClick}>
        {children}
      </button>
    </S.ButtonDiv>
  )
}

export default Button