import { Link } from 'react-router-dom';
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import Api from '../../Services/api';
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import KenzieHub from "../../Img/KenzieHub.svg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { toast } from 'react-toastify';

const Login = () => {
    const history = useHistory()
    const formSchema = yup.object().shape({
        email: yup
                .string()
                .email("E-mail invalido")
                .required("Email obrigatório"),
        password: yup
                   .string()
                   .required("Senha obrigatória")

    })
    const {register,handleSubmit}= useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = ({email,password})=> {
        const newLog = {
            email,
            password
        }
        Api
          .post("sessions",newLog)
          .then((resp)=>{
            const {token} = resp.data
            
            localStorage.setItem("@KenzieHub:token",JSON.stringify(token))
            localStorage.setItem("@KenzieHub:user",JSON.stringify(resp.data.user))
            history.push("/home")
            toast.success("Login Concluido")
        })
        .catch(()=>{
            toast.error("Email ou senha Incorreto")
        })
    }
  return (
    <S.Container>
        <img src={KenzieHub} alt="" />
      <S.FormContainer>
          <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <S.FormDivEmail>
            <Input label="Email" placeholder="Digite aqui seu email" register={register} name="email"/>
            </S.FormDivEmail>
          <S.FormDivSenha>
            <Input label="Senha" placeholder="Digite aqui sua senha" type="password" register={register} name="password"/>
          </S.FormDivSenha>
          <Button children="Entrar"/>
          <span>Ainda não tem uma conta?</span>
          <Link to="/register">
            <Button isGrey = {true} children="Cadastre-se" onClick={()=> history.push("/home")}/>
          </Link>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;