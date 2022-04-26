import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useHistory} from "react-router-dom"
import KenzieHub from "../../Img/KenzieHub.svg";
import Input from "../../Components/Input";
import { toast } from 'react-toastify';
import Api from "../../Services/api";

const Register = () => {

  const formSchema = yup.object().shape({
        
    email: yup
            .string()
            .email('Email Invalido')
            .required("Email Obrigatorio"),

    password: yup
                .string()
                .min(6,"Minimo 6 carcteres")
                .required("Senha e obrigatorio"),

    name: yup
            .string()
            .required("Nome De usuario Obrigatorio"),

    confirmedPassword: yup 
                        .string()
                        .required("Senhas diferentes")
                        .oneOf([yup.ref("password")], "Senhas desiguais"),
    
    course_module: yup
                    .string()                    

  })

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(formSchema)
    })
    const history = useHistory()
    const onSubmitForm =({name,password,email, course_module})=> {
        const newUser ={
            email,
            password,
            name,
            bio: "aaa",
            contact: "aaa",
            course_module,
        }
        Api
            .post("/users",newUser)
            .then(()=>{
                toast.success("Conta Criada com Sucesso")
                return history.push("/")
            })
        
        .catch(()=>{
            toast.error("Erro ao criar a conta , tente um email diferente")
        })
      }

  return (
    <S.Container>
      <S.DivImgButton>
        <img src={KenzieHub} alt="" />
        <button onClick={()=> history.push("/")}>Voltar</button>
      </S.DivImgButton>
      <S.FormContainer onSubmit={handleSubmit(onSubmitForm)}>
      <S.DivH1Span>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
      </S.DivH1Span>
        <S.FormDivEmail>
          <Input label="Nome" placeholder = "Digite aqui seu nome" register={register} name="name"/>
        </S.FormDivEmail>
        <S.FormDivEmail>
          <Input label="Email" placeholder = "Digite aqui seu email" register={register} name="email"/>
        </S.FormDivEmail>
        <S.FormDivSenha>
          <Input label="Senha" placeholder = "Digite aqui sua senha" register={register} name="password"/>
        </S.FormDivSenha>
        <S.FormDivSenha>
          <Input label="Confirmar Senha" placeholder = "Confirme sua senha" register={register} name="confirmedPassword"/>
        </S.FormDivSenha>
        <S.Select>
          <label>Selecionar Módulo</label>
          <select {...register("course_module")}>
            <option>Primeiro Módulo</option>
            <option>Segundo Módulo</option>
            <option>Terceiro Módulo</option>
          </select>
        <button children="Cadastrar" />
        </S.Select>
      </S.FormContainer>
    </S.Container>
  )

}

export default Register