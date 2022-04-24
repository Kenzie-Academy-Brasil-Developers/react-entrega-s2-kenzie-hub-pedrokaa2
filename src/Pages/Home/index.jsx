import * as S from './styles'
import KenzieHub from '../../Img/KenzieHub.svg'

const Home = () => {
  return (
    <S.Container>
       <S.DivImgButton>
        <img src={KenzieHub} alt="" />
        <button>Sair</button>
      </S.DivImgButton>
      <div>
        <h1>Olá</h1>
      </div>
    </S.Container>
  )
}

export default Home