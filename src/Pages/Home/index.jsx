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
  const [user, setUser] = useState()
  const [userID] = useState(JSON.parse(localStorage.getItem("@KenzieHub:userid")))

  const deleteTech = (id)=>{
    Api.delete(`users/techs/${id}`,{
      headers:{
        Authorization : `Bearer ${token}`
      }
    })
  }
     
  useEffect(() => {
    listTech()
  },[])

  useEffect(() => {
    listTech()
  },[technology])

  const listTech = () => {
    Api.get(`users/${userID}`).then((resp)=> {
      setTechnology(resp.data.techs)
      setUser(resp.data)
    })
  }
  
  return (
    <>
        {modalDisplay && 
          <ModalAdd setModalDisplay={setModalDisplay} />
        }
    <S.Container>
       <S.DivImgButton>
        <img src={KenzieHub} alt="" />
        <button onClick={()=> history.push("/")}>Sair</button>
      </S.DivImgButton>
      <S.H1Pdiv>
        <h1>Olá, {user !== undefined && user.name}</h1>
        <p>{user !== undefined && user.course_module}</p>
      </S.H1Pdiv>
        <S.H1ButtonDiv>
          <h1>Tecnologias</h1>
          <button onClick={() => setModalDisplay(true)}>+</button>
        </S.H1ButtonDiv>
        <div>
          {technology.map((tech)=> 
              <S.TechOutsideMap key={tech.id} >
              {modalChange &&
                <ModalExclusion deleteTech={deleteTech} setModalChange={setModalChange} techTitle={tech.title}/>
              }
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