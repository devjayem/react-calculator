import styled from 'styled-components'

export const Container = styled.div `
    display: grid;
    justify-content: center;
    align-content: center;
    width: 450px;
    margin: 40px auto;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 10px 10px 20px black;
    border-radius: 10px;
    gap: 10px;
    background-color: black;
`

export const Screen = styled.div `
    grid-column: 1 /-1;
    background-color: rgb(0,128,128, .9);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-wrap: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top:10px;
`

export const Previous = styled.div `
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5rem;
`

export const Current = styled.div `
    color: white;
    font-size: 2.5rem;
`

export const Button = styled.button `
    cursor: pointer;
    font-size: 2rem;
    color: white;
    border: 1px outset white;
    outline: none;
    background-color: darkslategray;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 30px;
    &:hover{
        background-color: #e3eeff;
        color: black;
    }

    ${({gridSpan}) => gridSpan && `grid-column: span ${gridSpan}; border-radius: 15px;`}
    ${({operation}) => operation && `background-color: #DAA520 `}
    ${({control}) => control && `background-color: #aaa9ad; color: black; `}
`