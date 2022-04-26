import * as S from './styles'
import KenzieHub from '../../Img/KenzieHub.svg'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Api from '../../Services/api'
import ModalAdd from "../../Components/ModalAdd"
import ModalExclusion from "../../Components/ModalExclusion"

const Home = () => {
  
  const history = useHistory()
  const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")))
  const [technology,setTechnology] = useState([])
  const [modalDisplay,setModalDisplay] = useState(false)
  const [modalChange,setModalChange] = useState(false)
  const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")|| ""))

  const deleteTech = (id)=>{
        Api.delete(`users/techs/${id}`,{
            headers:{
                Authorization : `Bearer ${token}`
            }
        })
    }
     
  useEffect(()=>{
    listTech()
  },[])

  useEffect(() => {
    setTechnology(technology)
  }, [technology])

  const listTech = () => {
    Api.get(`users/${user.id}`).then((resp)=> setTechnology(resp.data.techs))
  }

  return (
    <>
       {modalDisplay && 
          <ModalAdd setModalDisplay={setModalDisplay} />
        }
        {modalChange &&
          <ModalExclusion setModalDisplay={setModalDisplay} deleteTech={deleteTech} setModalChange={setModalChange}/>
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
              <S.TechOutsideMap key={tech.id} >
                <S.MapTech 
                  id={tech.id} 
                  onClick={(e)=> {
                    setModalChange(true)
                    localStorage.setItem("@KenzieHub:currentID", JSON.stringify(e.target.id))
                  }} 
                >
                    <h1>
                      {tech.title}
                    </h1>
  
                    <span>
                      {tech.status}
                    </span>
                </S.MapTech>
            
              </S.TechOutsideMap>           
          )}
        </div>
    </S.Container>
    </>
  )
}

export default Home