import * as S from './styles'
import Button from '../Button';
import { useState } from 'react';


const ModalExclusion = ({deleteTech, setModalChange, techTitle}) => {

  const [getUser] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")|| ""))
  const [getSkill] = useState(JSON.parse(localStorage.getItem("@KenzieHub:currentID")|| ""))

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
              <select onChange={(e) => {deleteTech(e.target.value)}}>
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