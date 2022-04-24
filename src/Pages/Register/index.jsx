import * as S from "./styles";
import KenzieHub from "../../Img/KenzieHub.svg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Register = () => {
  return (
    <S.Container>
      <S.DivImgButton>
        <img src={KenzieHub} alt="" />
        <button>Voltar</button>
      </S.DivImgButton>
      <S.FormContainer>
      <S.DivH1Span>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
      </S.DivH1Span>
        <S.FormDivEmail>
          <Input label="Nome" placeholder = "Digite aqui seu nome"/>
        </S.FormDivEmail>
        <S.FormDivEmail>
          <Input label="Email" placeholder = "Digite aqui seu email"/>
        </S.FormDivEmail>
        <S.FormDivSenha>
          <Input label="Senha" placeholder = "Digite aqui sua senha"/>
        </S.FormDivSenha>
        <S.FormDivSenha>
          <Input label="Confirmar Senha" placeholder = "Confirme sua senha"/>
        </S.FormDivSenha>
        <S.Select>
          <label>Selecionar Módulo</label>
          <select>
            <option>Primeiro Módulo</option>
            <option>Segundo Módulo</option>
            <option>Terceiro Módulo</option>
          </select>
        <button children="Cadastrar" />
        </S.Select>
      </S.FormContainer>
    </S.Container>
  );
};

export default Register;
