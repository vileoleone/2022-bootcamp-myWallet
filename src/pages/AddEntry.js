import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/Auth";

export default function AddEntry() {
    const navigate = useNavigate()

    let { token } = useContext(AuthContext);
    console.log(token)
    const [form, setForm] = useState(
        {
            value: "",
            description: ""
        }
    )
    function handleForm(e) {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
        console.log(form)
    }

    function postNewEntry(e) {
        e.preventDefault()
        /* const config = {
            headers: {
                "authorization": `Bearer ${token}`
            }
        } */

        axios.post(`http://localhost:5000/AddEntry`, form, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
            .then((resp) => {
                console.log(resp.data)
                navigate("/MainPage")
            })
            .catch((resp) => {
                console.log("deu ruim")
                console.log(resp.response)
            })

    }


    return (
        <BackgroundStyle>
            <Header>
                <h1>Nova Entrada</h1>
            </Header>
            <SignInForm onSubmit={postNewEntry}>
                <input required type="number" name="value" placeholder="Valor" onChange={handleForm} value={form.value}></input>
                <input required type="text" name="description" placeholder="Descrição" onChange={handleForm} value={form.description}></input>
                <SignInButton type="submit" value="Salvar entrada"></SignInButton>
            </SignInForm>
        </BackgroundStyle>
    )
}

const Header = styled.header`
width: 100%;
box-sizing: border-box;
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
color: #FFFFFF;
}
`

const BackgroundStyle = styled.main`
width: 100%;
height:100vh;
background-color: #8C11BE;
border: #8C11BE 5px solid;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

p {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 15px;
    font-family: Raleway;
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