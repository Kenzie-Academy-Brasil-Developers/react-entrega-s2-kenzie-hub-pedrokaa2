import * as S from './styles'
import Button from '../Button';

const ModalExclusion = ({deleteTech, setModalChange, techTitle}) => {

  const getUser = JSON.parse(localStorage.getItem("@KenzieHub:user") || "[]")
  const getSkill = JSON.parse(localStorage.getItem("@KenzieHub:currentID") || "[]")

  const HandleDisplayClick = () => {
    setModalChange(false)
  }

  return (
      <S.ModalContainer>
          <S.H1ButtonDivModal>
            <p>Detalhes da Tecnologia</p>
            <button onClick={() => HandleDisplayClick()}>X</button>
          </S.H1ButtonDivModal>
          <S.Select>
            <S.Input>
              <label>Nome do Projeto</label>
              <input
                type="text"
                readOnly="readOnly"
                value={techTitle}
              >
              </input>
            </S.Input>
              <label>Status</label>
              <select onChange={(e) => (e.target.value)}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            <S.ButtonsDiv>
              <S.buttonNegative>
                Salvar alterações
              </S.buttonNegative>
              <Button isGrey = {true} 
                onClick={() => {
                  if (getUser && getSkill !== ""){
                    deleteTech(getSkill)
                  }
                  console.log(getSkill)
                }}
              >
                Excluir
              </Button>
            </S.ButtonsDiv>
          </S.Select>
      </S.ModalContainer>
  );
};
export default ModalExclusion;