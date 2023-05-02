import styled from "styled-components"

export const Header = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 5em;
    transition: 0.6s;
    background-color: black;
    z-index: 10000;
`

export const logo = styled.a `
    position: relative;
    font-weight: 700;
    color: #fff
    font-style:
    text-decoration: solid;
    font-size: 4em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.6s;
`

export const HeaderUl = styled.ul `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderLi = styled.li `
    position: relative;
    list-style: none;
    font-size: 2em;
`

export const Headera = styled.a `
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: #fff
    letter-spacing: 2px;
    font-weight: 500px;
    transition: 0.6s;
`