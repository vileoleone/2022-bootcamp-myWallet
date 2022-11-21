import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowRightOnRectangle, } from 'react-icons/hi2'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/Auth";
export default function MainPage() {
    const { token } = useContext(AuthContext)
    const [balanceArray, setBalanceArray] = useState([])
    const [total, setTotal] = useState(0)
    const config = {
        headers: {
            "authorization": `Bearer ${token}`
        }
    }
    console.log(balanceArray)
    function updateBalance(array) {
        let sum = 0
        array.forEach(obj => {

            if (obj.type === "deposit") {
                sum += Number(obj.value)
            }
            else {
                sum -= Number(obj.value)
            }
        });
        return setTotal(sum)
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/MainPage`, config)
            .then((resp) => {
                setBalanceArray(resp.data)
                updateBalance(balanceArray)
            })
            .catch((resp) => {
                console.log("deu ruim")
                console.log(resp.response)
            })
    }, [balanceArray])




    if (balanceArray.length === 0) {
        return (
            <BackgroundStyle>
                <Header>
                    <h1>Olá, Fulano</h1>
                    <Link to="/">
                        <ArrowIcon />
                    </Link>
                </Header>
                <MainContent>
                    <P3>Não há registros de entrada e saída</P3>
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
    else {

        return (
            <BackgroundStyle>
                <Header>
                    <h1>Olá, Fulano</h1>
                    <Link to="/">
                        <ArrowIcon />
                    </Link>
                </Header>
                <MainContent>
                    <UpperContainer>
                        {balanceArray.map((obj) => {
                            return (
                                <BalanceParagraph>
                                    <Positionate>
                                        <Data>{obj.date}</Data>
                                        <Description>{obj.description}</Description>
                                    </Positionate>
                                    <Value color={obj.type} >{parseFloat(obj.value).toFixed(2)}</Value>
                                </BalanceParagraph>
                            )
                        })}
                    </UpperContainer>
                    <TotalBalance>
                        <p>SALDO</p>
                        <P2 color={total}>{parseFloat(total).toFixed(2)}</P2>
                    </TotalBalance>
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

}

const TotalBalance = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 175px;
    width: 310px;
    font-size: 17px;
    font-weight: 700;
    font-family: Raleway;
    color: #000000;
    margin-top: 20px;
`
const UpperContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll ;
    margin-bottom: 75px;
`
const P3 = styled.p`
    text-align: center;
    width: 180px;
    margin-top: 180px ;
    align-self: center;
    font-size: 17px;
    font-weight: 500;
    font-family: Raleway;
    color: #868686;
`

const P2 = styled.p` 
    font-size: 17px;
    font-weight: 500;
    font-family: Raleway;
    color:${props => props.color >= 0 ? "#03AC00": "#C70000" } ;
`
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
position: relative;
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
const Positionate = styled.div`
display: flex;
flex-direction: row;
`
const BalanceParagraph = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
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
`
const Value = styled.p`
color: ${props => props.color === "deposit" ? "#03AC00" : "#C70000"};
font-size: 15px;
font-weight: 400;
font-family: Raleway;
`