import { React, useState } from 'react'
import * as S from './Main_style'
import developer from './../../imgs/deve.jpg'


const Main = () => {
  const [Projects, setProjects] = useState([{}])
  return (
    <div>
    <div id='about-link'>
        <S.DivAbout style={{
          backgroundImage: ` url(${developer})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} >
          <S.DivImg>
            <S.divThings>
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
              </S.divThings>
            <S.ButtonDiv>
              <S.ButtonDefault>Currículo</S.ButtonDefault>
            </S.ButtonDiv>
          </S.DivImg>
        </S.DivAbout>
        <S.DivExpe>
          <S.DivExperience>
            <S.StyleH1 id="about-experience">Experiência</S.StyleH1>
              <S.DivCard>
                <S.divLista>
                  <S.DivP>Lobo Guará</S.DivP>
                  <p>Suporte Técnico</p>
                  <S.DivGray>Agosto de 2018 a janeiro de 2019</S.DivGray>
                </S.divLista>
                <S.divLista>
                  <S.DivP>Theia</S.DivP>
                  <p>Estagiária</p>
                  <S.DivGray>Agosto de 2022 até o momento!</S.DivGray>
                </S.divLista>
              </S.DivCard>
          </S.DivExperience>
        </S.DivExpe>
    </div>
    </div>
  )
}

export default Main