import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents"
import AuthContext from "../../contexts/AuthContext";

export default function SignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { token, setToken, nome, setNome } = useContext(AuthContext)

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        axios.post(`http://localhost:5000/sign-in`, {
            email: formData.email,
            password: formData.password
        })
            .then((res) => {
                // console.log(res)
                setToken(res.data.token)
                navigate("/home")
            })
            .catch(e => console.log(e))

    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    // disabled={isLoading}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    // disabled={isLoading}
                    required
                />

                <Button type="submit">Entrar</Button>
            </Form>

            <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}
