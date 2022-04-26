import * as S from './styles'
import Button from '../Button';
import { useState } from 'react';

const ModalAdd = ({ setModalDisplay, setAddTech, createTecnolog }) => {

  const [nivel,setNivel] = useState("")

  return (
    <>
      <S.ModalContainer>
          <S.H1ButtonDivModal>
            <p>Cadastrar Tecnologia</p>
            <button onClick={() => setModalDisplay(false)}>X</button>
          </S.H1ButtonDivModal>
          <S.Select>
            <S.Input>
              <label>Nome</label>
              <input
                type="text" placeholder = "Digite aqui sua tecnologia"
                onChange={(e) => setAddTech(e.target.value)}
              >
              </input>
            </S.Input>
              <label>Selecionar status</label>
              <select onChange={(e) => setNivel(e.target.value)}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            <Button 
              onClick={() => createTecnolog(nivel)}
            >
              Cadastrar Tecnologia
            </Button>
          </S.Select>
      </S.ModalContainer>
    </>
  );
};
export default ModalAdd;