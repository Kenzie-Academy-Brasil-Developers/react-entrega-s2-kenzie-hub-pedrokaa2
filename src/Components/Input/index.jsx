import * as S from './styles'

const Input = ({label, register, name, ...rest}) => {
  return (
    <S.InputDiv>
      <label>{label}</label>
      <input {...register(`${name}`)} {...rest}></input>
    </S.InputDiv>
  )
}

export default Input