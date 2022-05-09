import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;

width: 100%;
height: 100%;

background-color: #8C11BE;

img{
    width: 30px;
    height: 30px;
}
`
const Titulo = styled.h2`
display:flex;
font-size: 26px;
font-weight: 700;
line-height: 30px;
margin-bottom: 22px;

color: #FFFFFF;
`
const Header = styled.header`
display: flex;
justify-content: space-between;
/* align-items: center; */

padding: 25px 25px 0;
`
const Footer = styled.footer`
display: flex;
width: 100%;
padding: 0 25px;
justify-content: space-between;
position: absolute;
bottom: 15px;
`
const Button = styled.div`
display: flex;
width: 155px;
height: 114px;

background: #A328D6;
border: none;
border-radius: 5px;

font-weight: 700;
font-size: 17px;
line-height: 20px;

color: #FFFFFF;
`

export {
    Button,
    Container,
    Footer,
    Header,
    Titulo,
} 