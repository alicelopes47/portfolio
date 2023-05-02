import styled from "styled-components"

export const DivAbout = styled.div `
height: 80vh;
background-image: url('./../../imgs/deve.jpg');
`

export const DivImg = styled.div `
    position: relative;
    z-index: 1;
    display: flex;
    height: 40%;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    flex-direction: column;
    background-color: white;
    padding: 1em;
    border-radius: 2em;
`

export const ButtonDefault = styled.button `
    height: 90px;
    font-size: 1em;
    width: 200px;
    background-color: #756D54;
    color: white;
    border-radius: 1em;
`

export const ButtonDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivExpe = styled.div `
    display: flex;
    padding: 2em;
    text-align: center;
    background-color: rgb(160 185 198 / 48%);
    font-size: 1em;
    color: black;
    align-items: center;
    justify-content: center;
`

export const DivList = styled.div `
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const DivP = styled.p ` 
    font-size: 2em;
    color: black;
`

export const DivGray = styled.p `
    font-size: 1em;
    color: grey;
    margin-top: -1em;
`

export const divLista = styled.div `
    background-color: white;
    padding: 1em;
    border-radius: 2em;
    margin-right: 4em;
    :hover { 
        background-color: rgb(160 185 198 / 48%);
        padding: 1.3em;
        transition: 0.1s
    }
`

export const StyleH1 = styled.h1 `
    font-size: 4em;
    margin-right: 0.8em;
`