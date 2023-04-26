import styled from "styled-components"

export const DivAbout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid black;
`

export const DevImg = styled.img `
    width: 100%;    position: relative;
    height: 100%;
`

export const DivImg = styled.div `
    position: absolute;
    display: flex;
    font-size: 2em;
    flex-direction: column;
    background-color: white;
    padding: 2em;
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
`