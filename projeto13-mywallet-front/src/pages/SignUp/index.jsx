import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, Form, Input, Button, StyledLink } from "../../components/FormComponents"

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            setFormData({ ...formData, password: "", password2: "" })
            return alert("Senhas não correspondem entre si!")
        }

        axios.post(`http://localhost:5000/sign-up`, {
            name: formData.name,
            email: formData.email,
            password: formData.password
        })
            .then((res) => {
                console.log(res)
                navigate("/")
            })
            .catch(e => console.log(e))
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    // disabled={isLoading}
                    required
                />
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
                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    name="password2"
                    onChange={handleChange}
                    value={formData.password2}
                    // disabled={isLoading}
                    required
                />

                <Button type="submit">Cadastrar</Button>
            </Form>

            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    )
}