import { React, useRef, useState} from 'react'
import * as S from './Header_style'
import logo from './../../imgs/logo.png'

const Header = () => {
  return (
    <S.Header>
    <S.logo href='#' className='logo'>Alice</S.logo> 
    <S.HeaderUl>
      <S.HeaderLi><S.Headera href='#'>Início</S.Headera ></S.HeaderLi>
      <S.HeaderLi><S.Headera  href='#'>Experiência</S.Headera ></S.HeaderLi>
      <S.HeaderLi><S.Headera  href='#'>Tecnologias</S.Headera ></S.HeaderLi>
      <S.HeaderLi><S.Headera  href='#'>Projetos</S.Headera ></S.HeaderLi>
      <S.HeaderLi><S.Headera  href='#'>Quem sou eu?</S.Headera ></S.HeaderLi>
    </S.HeaderUl>
    
    </S.Header>
  )
}

export default Header