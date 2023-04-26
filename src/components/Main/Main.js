import React from 'react'
import * as S from './Main_style'
import developer from './../../imgs/deve.jpg'

const Main = () => {
  return (
    <div>
        <S.DivAbout>
          <S.DevImg src={developer} alt="dev" />
          <S.DivImg>
              <h2>
              Olá! Me chamo Alice Lopes e sou desenvolvedora front-end.
              </h2>
              <p>
                Nesse portfolio vocês vao ter maior noção do meu trabalho!
              </p>
              <p>
              Clicando abaixo você consegue abrir
                meu currículo!
              </p>
            <S.ButtonDiv>
              <S.ButtonDefault>Currículo</S.ButtonDefault>
            </S.ButtonDiv>
          </S.DivImg>
        </S.DivAbout>
        <S.DivExpe>
          <div>
            <S.StyleH1 id='exper'>Experiência</S.StyleH1>
            <S.DivList>
              <S.divLista>
                <S.DivP>Lobo Guará</S.DivP>
                <S.DivGray>Agosto de 2018 a janeiro de 2019</S.DivGray>
              </S.divLista>
              <S.divLista>
                <S.DivP>Theia</S.DivP>
                <S.DivGray>Agosto de 2022 até o momento!</S.DivGray>
              </S.divLista>
            </S.DivList>
          </div>
        </S.DivExpe>
    </div>
  )
}

export default Main