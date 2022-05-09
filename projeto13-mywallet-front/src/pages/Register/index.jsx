import axios from "axios";
import { React, useState, useContext } from 'react'
import { useParams, useNavigate, useEffect } from 'react-router-dom';

import { Container, Titulo } from "./style";
import { Form, Input, Button } from "../../components/FormComponents" //o container daqui nao te aling e justify center 
import AuthContext from "../../contexts/AuthContext"

export default function Register() {
    const navigate = useNavigate();
    const { type } = useParams()
    const { token, setToken, nome, setNome } = useContext(AuthContext)
    const [formData, setFormData] = useState({ valor: '', descricao: '' });
    console.log(token)

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // axios.post(``, {
        //     entry: formData.valor,
        //     description: formData.descricao
        // }, {
        //     headers: {
        //         Authorization: "Bearer " + token
        //     }
        // })
        //     .then((res) => {
        //         console.log(res)
        //         navigate("/home")
        //     })
        //     .catch(e => console.log(e))
    }

    return (
        <Container>
            <Titulo>Nova {type === ":entrada" ? "entrada" : "saida"}</Titulo>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="number"
                    placeholder="Valor"
                    name="valor"
                    onChange={handleChange}
                    value={formData.valor}
                    required
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    name="descricao"
                    onChange={handleChange}
                    value={formData.descricao}
                    required
                />
                <Button>Salvar {type === ":entrada" ? "entrada" : "saida"}</Button>
            </Form>
        </Container>
    )
}