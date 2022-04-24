import * as S from "./styles";

const Button = ({children, isGrey = false}) => {
  return (
    <S.ButtontDiv isGrey = {isGrey}>
      <button>
        {children}
      </button>
    </S.ButtontDiv>
  )
}

export default Button