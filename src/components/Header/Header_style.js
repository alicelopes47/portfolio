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
    font-size: 1.8em;
    gap: 3em;
    list-style: none;
    cursor: pointer;
`
export const HeaderItem = styled.li `
    :hover { 
        font-size: 1.3em;
        transition: 0.1s;
    }
`

export const Logo = styled.img `
    width: 8em;
    padding: 1em;
`