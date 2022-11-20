import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowRightOnRectangle, } from 'react-icons/hi2'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
export default function MainPage() {
    return (
        <BackgroundStyle>
            <Header>
                <h1>Olá, Fulano</h1>
                <ArrowIcon />
            </Header>
            <MainContent>
                <BalanceParagraph>
                    <Data>30/11</Data>
                    <Description> Almoço mãe</Description>
                    <Value>39.90</Value>
                </BalanceParagraph>
                <BalanceParagraph>
                    <Data>30/11</Data>
                    <Description> Almoço mãe</Description>
                    <Value>39.90</Value>
                </BalanceParagraph>
            </MainContent>
            <BelowContent>
                <Link to="/AddEntry">
                    <NewEntry>
                        <PlusArrow />
                        <p>Nova Entrada</p>
                    </NewEntry>
                </Link>
                <Link to="/SubtractEntry">
                <NewEntry>
                    <MinusArrow />
                    <p>Nova Saída</p>
                    </NewEntry>
                </Link>
            </BelowContent>
        </BackgroundStyle>
    )
}

const Header = styled.header`
width: 100%;
box-sizing: border-box;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
flex-direction: row;
padding-left: 25px;
padding-right: 25px;
margin-bottom: 25px;
margin-top: 25px;
h1 {
font-weight: 700;
font-size: 25px;
font-family: Raleway;
margin: 0;h1 {
    font-family: Saira Stencil One;
    color: #FFFFFF;
    font-weight: 400;
}
color: #FFFFFF;
}
`

const BelowContent = styled.div`
    position: fixed;
    bottom: 0;
    margin-bottom: 25px;
    width: 325px;
    display: flex ;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 25px;
    margin-right: 25px;
`
const MainContent = styled.main`
    display: flex;
    box-sizing: border-box;
    height: 450px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding-top: 15px;
    margin-top: 50px;
    margin-bottom: 150px;
    padding-left: 10px;
    padding-right: 10px;
    align-items: flex-start;
    flex-direction: column;
`
const CenterParagraph = styled.p`
    width: 180px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #868686;
    font-family: Raleway;
    font-size: 25px;
    text-align: center;
`
const ArrowIcon = styled(HiArrowRightOnRectangle)`
    color: #FFFFFF;
    width: 25px;
    height: 25px;
`
const PlusArrow = styled(AiOutlinePlusCircle)`
 color: #FFFFFF;
 width: 25px;
 height: 25px;
`
const MinusArrow = styled(AiOutlineMinusCircle)`
 color: #FFFFFF;
 width: 25px;
 height: 25px;
`
const BackgroundStyle = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
`
const SignInForm = styled.form`
    color: #000000;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        box-sizing: border-box;
        width: 330px;
        height: 60px;
        margin-bottom: 15px;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        padding: 10px;
        font-family: Raleway;

    }
`
const NewEntry = styled.div`
    box-sizing: border-box;
    width: 155px;
    height: 115px;
    background-color: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    padding-left: 10px;
    p {
        width: 64px;
        height: 40px;
        font-size: 15px;
        display: flex;
        justify-content: flex-start;
        color: #FFFFFF;
        font-family: Raleway;
    }
`
const BalanceParagraph = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: flex-start;
`
const Data = styled.p`
    color: #868686;
    font-size: 15px;
    font-weight: 400;
    font-family: Raleway;
    margin-right: 10px;
`
const Description = styled.p`
    color: black;
    font-size: 15px;
    font-weight: 400;
    font-family: Raleway;
    margin-right: 130px;
`
const Value = styled.p`
color: red;
font-size: 15px;
font-weight: 400;
font-family: Raleway;
`