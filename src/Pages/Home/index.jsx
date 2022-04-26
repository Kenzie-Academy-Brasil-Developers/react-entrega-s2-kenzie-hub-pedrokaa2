import * as S from './styles'
import KenzieHub from '../../Img/KenzieHub.svg'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Api from '../../Services/api'
import ModalAdd from "../../Components/ModalAdd"
import ModalModify from "../../Components/ModalModify"

const Home = () => {
  
  const history = useHistory()
  const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")))
  const [technology,setTechnology] = useState([])
  const [modalDisplay,setModalDisplay] = useState(false)
  const [modalChange,setModalChange] = useState(false)
  const [other,setOther] =  useState("")
  const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")|| ""))

  const deleteTech = (value)=>{
        Api.delete(`users/techs/${value}`,{
            headers:{
                Authorization : `Bearer ${token}`
            }
        })
    }
    
    const otherTech =(value)=>{
        Api.put(`users/techs/${value}`,{
            status : other
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    }
    
  useEffect(()=>{
    listTech()
  },[])

  const listTech = () => {
    console.log(user.id)
    Api.get(`users/${user.id}`).then((resp)=> setTechnology(resp.data.techs))
  }

  return (
    <>
       {modalDisplay && 
          <ModalAdd setModalDisplay={setModalDisplay} />
        }
        {modalChange && 
          <ModalModify setOther={setOther} deleteTech={deleteTech} otherTech={otherTech} setModalChange={setModalChange} />
        }
    <S.Container>
       <S.DivImgButton>
        <img src={KenzieHub} alt="" />
        <button onClick={()=> history.push("/")}>Sair</button>
      </S.DivImgButton>
      <S.H1Pdiv>
        <h1>Olá, {user.name}</h1>
        <p>{user.course_module}</p>
      </S.H1Pdiv>
        <S.H1ButtonDiv>
          <h1>Tecnologias</h1>
          <button onClick={() => setModalDisplay(true)}>+</button>
        </S.H1ButtonDiv>
        <div>
          {technology.map((tech)=> 
              <div 
                id={tech.id} 
                onClick={(e)=> {
                    setModalChange(true)
                }} 
                key={tech.id}
              >

                  <h4
                    id={tech.id}
                  > 
                       {tech.title}
                  </h4>

                  <p 
                    id={tech.id}
                  >
                       {tech.status}
                  </p>
            
              </div>           
          )}
        </div>
    </S.Container>
    </>
  )
}

export default Home