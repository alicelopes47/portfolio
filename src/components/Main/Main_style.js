import styled from "styled-components"

export const DivAbout = styled.div `
height: 80vh;
background-image: url('./../../imgs/deve.jpg');
`

export const DivImg = styled.div `
    position: relative;
    z-index: 1;
    display: flex;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 2em;
    font-size: 1.5em;
    flex-direction: column;
    align-items: center;
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

export const divThings = styled.div ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    gap: 0.3em;
`

export const DivExperience = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const DivExpe = styled.div `
    display: flex;
    padding: 2em;
    text-align: center;
    background-color: rgb(160 185 198 / 48%);
    font-size: 1em;
    color: black;
    align-items: center;
    justify-content: space-around;
`

export const DivList = styled.div `
    display: flex;
    border: solid black;
    width: 100%;
    margin-top: 2em;
    height: 20%;
    align-items: center;
    justify-content: space-around;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    height: 150px;
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
    margin-bottom: 0.5em;
`

export const DivCard = styled.div `
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;
`