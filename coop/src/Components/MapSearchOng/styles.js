import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const Filtro = styled.div`
  margin-bottom: 16px;

  select + select {
    margin-left: 8px;
  }
`;

export const Mapa = styled.div`
  position: relative;
  width: 100%;
  border: solid 2px var(--roxo);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    height: 400px;
  }
`;

export const AvisoSelecioneCidade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: 900;
    color: var(--roxo);
  }
`;