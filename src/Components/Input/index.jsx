import * as S from './styles'

const Input = ({label, ...rest}) => {
  return (
    <S.InputDiv>
      <label>{label}</label>
      <input {...rest}></input>
    </S.InputDiv>
  )
}

export default Input