import { React, useRef, useState} from 'react'
import * as S from './Header_style'
import logo from './../../imgs/logo.png'

const Header = () => {
  return (
    <>
    <S.HeaderNav> 
    <S.Logo src={logo} alt='' />
    <S.HeaderList>
      <S.HeaderItem><S.link href="#about-link">Sobre </S.link></S.HeaderItem>
      <S.HeaderItem><S.link href='#about-experience'>Experiência</S.link></S.HeaderItem>
      <S.HeaderItem>Projetos</S.HeaderItem>
      <S.HeaderItem>Tecnologias</S.HeaderItem>
      <S.HeaderItem>Redes sociais</S.HeaderItem>
      <S.HeaderItem>Quem sou eu?</S.HeaderItem>
    </S.HeaderList>
    </S.HeaderNav> 
    
    </>
  )
}

export default Header