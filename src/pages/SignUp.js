import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function SignUp() {
   const navigate = useNavigate()

    const [form, setForm] = useState(
        {
            name: "",
            email: "",
            password: "",
            password_confirmation:""
        }
    )

    function handleForm(e) {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    function postSignUp(e) {
        e.preventDefault();

        axios.post(`http://localhost:5000/sign-up`, form)
            .then((resp) => {
                alert("Cadastrado com sucesso")
                navigate("/")
            })
            .catch((resp) => {
            console.log(resp.response.data)
        })

    }

    return (
        <BackgroundStyle>
            <h1>MyWallet</h1>
            <SignInForm onSubmit={postSignUp}>
                <input required type="text" name="name" placeholder="Nome" onChange={handleForm} value={form.name}></input>
                <input required type="email" name="email" placeholder="E-mail" onChange={handleForm} value={form.email}></input>
                <input required type="password" name="password" placeholder="Senha" onChange={handleForm} value={form.password}></input>
                <input required type="password" name="password_confirmation" placeholder=" Confirme a Senha" onChange={handleForm} value={form.password_confirmation}></input>
                <SignInButton type="submit" value="Entrar"></SignInButton>
            </SignInForm>
            <Link to="/">
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