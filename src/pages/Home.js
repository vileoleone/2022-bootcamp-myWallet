import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Home() {
    useNavigate()

    const [form, setForm] = useState(
        {
            email: "",
            password: ""
        }
    )

    function handleForm(e) {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    return (
        <BackgroundStyle>
            <h1>MyWallet</h1>
            <SignInForm>
                <input required type="email" name="email" placeholder="E-mail" onChange={handleForm} value={form.password}></input>
                <input required type="password" name="password" placeholder="Senha"></input>
                <Link to ="/MainPage">
                    <SignInButton type="submit" value="Entrar"></SignInButton>                
                </Link>
            </SignInForm>

            <Link to = "/SignUp">
                <p>Primeira Vez? Cadastre-se!</p>
            </Link>

        </BackgroundStyle>
    )
}

const BackgroundStyle = styled.main`
width: 100%;
height:100vh;
background-color: #8C11BE;
border: #8C11BE 5px solid;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 15px;
    font-family: Raleway;
}

h1 {
    font-family: Saira Stencil One;
    color: #FFFFFF;
    font-weight: 400;
}

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
const SignInButton = styled.input`
background-color:#A328D6;
color: #FFFFFF;
font-size: 20px;
font-weight: 700;
font-family: Raleway;
`