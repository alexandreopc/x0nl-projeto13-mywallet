import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState, useContext } from 'react'

import { SignIn, SignUp, Home, Register } from "./pages"
import AuthContext from "./contexts/AuthContext"

export default function App() {
    const [token, setToken] = useState()
    const [nome, setNome] = useState()
    return (
        <AuthContext.Provider value={{ token, setToken, nome, setNome }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register/:type" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}