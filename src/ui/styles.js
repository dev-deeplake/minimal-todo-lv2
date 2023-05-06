import styled, { keyframes } from "styled-components"
import * as sVar from "./styleVariables"
import { Link } from "react-router-dom"


export const AppContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AppWrap = styled.div`
    min-width: 800px;
    max-width: 1200px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const introAnimation = keyframes`
    from {
        color: rgba(0, 0, 0, 0.6);
    }
    to {
        color: rgba(0, 0, 0, 0.2);
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;

    > h1 {
        font-size: 26pt;
        font-weight: bold;
        margin-bottom: ${sVar.cardOutsideMargin};
        animation-duration: 2s;
        animation-name: ${introAnimation};
        transition-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    > p {
        animation-duration: 2s;
        animation-name: ${introAnimation};
        transition-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate; 
    }
`

// export const IntroHeader = styled.h1`
//     animation-duration: 3.5s;
//     animation-name: ${introAnimation};
//     transition-timing-function: linear;
//     animation-iteration-count: infinite;
//     animation-direction: alternate;
// `

// export const IntroParagraph = styled.p`
//     animation-duration: 3.5s;
//     animation-name: ${introAnimation};
//     transition-timing-function: linear;
//     animation-iteration-count: infinite;
//     animation-direction: alternate; 
// `

export const TodoBtnDefault = styled.button`
    border: 2px solid ${sVar.lightGreen};
    border-radius: ${sVar.borderRadiusMini};
    padding: 10px 20px;
    color: ${sVar.middleShadow};
    transition: ${sVar.btnTransition};
    &:hover {
        color: #FBFBFD;
        background-color: rgba(0, 92, 83, 0.6);
        border: 2px solid rgba(0, 92, 83, 0.9);
        box-shadow: ${sVar.boxVignette};
    }
`

export const InputSubmitBtn = styled(TodoBtnDefault)`
    margin-top: 10px;
    margin-bottom: ${sVar.cardOutsideMargin};
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputWrap = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    margin-bottom: ${sVar.cardInsideMargin};

  > span {
    color: ${sVar.strongShadow};
    display: flex;
    width: 140px;
  }

  > input {
    height: 30px;
    width: inherit;
    background-color: rgba(238, 238, 238, 0.4);
    border: 1px solid rgba(238, 238, 238, 1);
    border-radius: 15px;
    padding: 5px 12px;
    box-shadow: 0 0 5px ${sVar.lightShadow};
    caret-color: ${sVar.lightGreen};
    &:focus {
        outline: 4px double ${sVar.lightGreen}
    }
    &::placeholder {
        color: ${sVar.lightShadow}
    }
  }
`

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const TodoListTitle = styled.div`
  display: flex;
  font-size: 14pt;
  color: ${sVar.defaultBlack};
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  padding: 10px 10px;
  border-radius: 10px;
  font-weight: 700;
`

export const TodoListEntries = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  min-height: 250px;
  gap: 20px;
  margin: 20px;
`

export const TodoCardContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 260px;
    min-height: 270px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: 0px 8px 26px 1px rgba(34, 34, 34, 0.05);
`

export const TodoCardTextWrap = styled.div`
    > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        line-break: break-all;
        word-break: break-all;
        margin: 20px 10px 10px 20px;
        margin-bottom: 10px;
        margin-top: 20px;
    }
`

// export const TodoCardTextHeader = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     line-break: keep-all;
//     word-break: keep-all;
// `

export const TodoCardTextBody = styled.p`
    padding: 0 20px;
    max-width: 200px;
    word-break: break-all;
    
`

export const TodoDetailLink = styled(Link)`
    color: ${sVar.strongShadow};
    text-decoration: none;
    &:visited {
        color: inherit
    }
    &:hover {
        text-decoration: underline;
    }
`

export const TodoCardDetails = styled.p`
    color: ${sVar.defaultBlack};
    font-size: 11pt;
    text-align: right;
    margin-right: 10px;
    padding-right: 0.6rem;
    margin-bottom: 20px;
`

export const TodoCardBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 10px 0;
    gap: 10px;
`

export const TodoCardTitle = styled.p`
    max-width: 220px;
    font-size: 14pt;
    font-weight: bold;
    word-wrap: break-word;
    margin-right: 10px;
`

export const TodoBtnRevert = styled(TodoBtnDefault)`
    border: 2px solid rgba(235, 52, 52, 0.8);
    padding: 5px 10px;
    color: ${sVar.strongShadow};
    &:hover {
        background-color: rgba(235, 52, 52, 0.5);
        border: 2px solid rgba(235, 52, 52, 0.7);
    }
`

export const TodoBtnDone = styled(TodoBtnDefault)`
    border: 2px solid rgba(0, 92, 83, 0.6);
    padding: 5px 10px;
    color: ${sVar.strongShadow};
`

export const TodoBtnDelete = styled(TodoBtnDefault)`
    padding: 5px 10px;
    color: ${sVar.strongShadow};
    &:hover {
        color: #FBFBFD;
        background-color: rgba(4, 41, 64, 0.6);
        border: 2px solid rgba(4, 41, 64, 0.8);
        box-shadow: ${sVar.boxVignette};
    }
`

export const DetailContainer = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 20px 800px ${sVar.lightShadow} inset;

    > div {
        box-sizing: border-box;
        width: 600px;
        height: 450px;
        background-color: ${sVar.defaultWhite};
        border-radius: ${sVar.borderRadiusBig};
        box-shadow: 6px 6px 10px ${sVar.lightShadow};
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 60px 80px 40px 80px;
        
    }
`

export const DetailTitleWrap = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`

export const DetailTitle = styled.h2`
    color: ${sVar.defaultBlack};
    font-size: 20pt;
    font-weight: bold;
`

export const DetailID = styled.span`
    color: ${sVar.strongShadow};
`

export const DetailBody = styled.p`
    height: 200px;
    overflow-y: scroll;
    margin-bottom: 50px;
    color: ${sVar.defaultBlack};

  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer and legacy Edge */
  -ms-overflow-style: none;
`

export const DetailCloseBtn = styled(TodoBtnDefault)`
    box-sizing: border-box;
    position: absolute;
    left: 42%;
    bottom: 5%;
    width: 100px;
`
