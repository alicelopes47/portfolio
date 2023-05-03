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
    background-color: #07153e;
    color: white;
    padding: 1em;
    border-radius: 2em;
`

export const ButtonDefault = styled.button `
    height: 90px;
    font-size: 1em;
    width: 200px;
    background-color: white;
    color: black;
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
    background-color: white;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 60%;
    padding: 2em;
    border-radius: 2em;
`

export const DivExpe = styled.div `
    display: flex;
    padding: 2em;
    text-align: center;
    background-color: black;
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
    color: white;
`

export const DivGray = styled.p `
    font-size: 1em;
    color: grey;
    margin-top: 0em;

`

export const divLista = styled.div `
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    padding: 1em;
    border-radius: 2em;
    margin-right: 4em;
`

export const StyleH1 = styled.h1 `
    font-size: 4em;
    color: black;
    margin-right: 0.8em;
    margin-bottom: 0.5em;
`

export const DivCard = styled.div `
    display: flex;
    padding: 2em;
    width: 70%;
    justify-content: space-between;
    align-items: center;
`