import React from 'react'
import * as S from './Header_style'
import logo from './../../imgs/logo.png'

const Header = () => {
  return (
    <>
    <S.HeaderNav> 
    <S.Logo src={logo} alt='' />
    <S.HeaderList>
      <S.HeaderItem>Sobre</S.HeaderItem>
      <S.HeaderItem>Experiência</S.HeaderItem>
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