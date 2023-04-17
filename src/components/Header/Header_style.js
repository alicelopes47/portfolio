import styled from "styled-components"

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    background-color: #6a2e35;
`
export const HeaderList = styled.ul`
    color: white;
    display: flex;
    font-size: 2em;
    gap: 3em;
    list-style: none;
    cursor: pointer;
`
export const HeaderItem = styled.li `
    padding: 0.5em;
    border-radius: 0.5em;
    :hover { 
        font-size: 1.1em;
        padding: 0.5em;
        background-color: black;;
        transition: 0.5s;
    }
`

export const Logo = styled.img `
    width: 8em;
    padding: 0.5em;
`