import * as S from "./styles";
import KenzieHub from "../../Img/KenzieHub.svg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Login = () => {
  return (
    <S.Container>
        <img src={KenzieHub} alt="" />
      <S.FormContainer>
          <h1>Login</h1>
        <form>
            <S.FormDivEmail>
            <Input label="Email" />
            </S.FormDivEmail>
          <S.FormDivSenha>
            <Input label="Senha" />
          </S.FormDivSenha>
          <Button children="Entrar" />
          <span>Ainda não possui uma conta?</span>
          <Button isGrey = {true} children="Cadastre-se" />
        </form>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
