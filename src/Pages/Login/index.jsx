import { Link } from 'react-router-dom';
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import axios from 'axios';
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import KenzieHub from "../../Img/KenzieHub.svg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { toast } from 'react-toastify';
import Register from '../Register';

const Login = ({SetInfoUser, setAuthenticated,authenticated}) => {
    const history = useHistory()
    const formSchema = yup.object().shape({
        email:yup.string().email("E-mail invalido").required("Campo Obrigatorio"),
        password:yup.string().required("Campo Obrigatorio")

    })
    const {register,handleSubmit}= useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction =({email,password})=> {
        const newLog ={
            email,
            password
        }
        axios.post("sessions",newLog).then((resp)=>{
            const {token} = resp.data
            
            localStorage.setItem("@KenzieHub:token",JSON.stringify(token))
            toast.success("Login Concluido")
            localStorage.setItem("@KenzieHub:user",JSON.stringify(resp.data.user))
            setAuthenticated(true)
            history.push("/home")
        })
        .catch((error)=>{
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
