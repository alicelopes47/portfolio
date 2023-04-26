import styled from "styled-components"

export const HeaderNav = styled.nav`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between; 
    background-color: #6a2e35;
`
export const HeaderList = styled.ul`
    color: white;
    display: flex;
    font-size: 2em;
    list-style: none;
`
export const HeaderItem = styled.li `
    margin-left: 2rem;
    border-radius: 0.5em;
    cursor: pointer;
    :hover { 
        font-size: 1.2em;
        transition: 0.2s;
    }
`

export const Logo = styled.img `
    width: 8em;
    padding: 0.5em;
    border-radius: 2em;
`