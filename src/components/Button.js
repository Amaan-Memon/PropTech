import styled from "styled-components";
import heatSeekLogo from "../assets/HeatGeekLogo.png"

const QuoteButton = styled.div`
width: 100px;
height: 20px;
display: flex;
color: white;
font-size: 10px;
background-color: #0CA789;
border-radius: 10px;
flex-direction: row;
justify-content: flex-start;
padding: 0.5rem;
`

const ButtonImage = styled.img`
display: flex;
height: 20px;
width: 50px;
justify-content: flex-end;
padding-right: 0.25rem;
`
export const Button = () => {
return (
    
    <QuoteButton href = "" > GET A QUOTE
    <ButtonImage src = {heatSeekLogo}/>
    </QuoteButton>
    
)
}