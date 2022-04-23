import * as S from './styles'
import KenzieHub from '../../Img/KenzieHub.svg'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

const Login = () => {
  return (
    <S.Container>
      <img src={KenzieHub} alt=""/>
      <div>
        <h1>Login</h1>
        <Input
          label = "Email" 
        />
        <Input
          label = "Senha" 
        />
        <Button
          children = "Entrar"
        />
        <p></p>
        <Button/>
      </div>
    </S.Container>
  )
}

export default Login