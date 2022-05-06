import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import joi from "joi";
//import dayjs from "dayjs"
import { v4 as uuid } from 'uuid';

import db from "./db.js";

const app = express();
app.use(json());
app.use(cors());
dotenv.config();
// const token = uuid();


app.post("/participants", async (req, res) => {
    try {
        await db.collection('participants').insertOne({ name: req.body.name, lastStatus: Date.now() })

        await db.collection('messages').insertOne({ from: req.body.name, to: 'Todos', text: 'entra na sala...', type: 'status', time: dayjs().format("HH:mm:ss") })

        return res.sendStatus(201);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
});


app.post("/sing-up", async (req, res) => {
    const { email, name, password } = req.body;
    console.log(email, name, password);
    const passwordHash = bcrypt.hashSync(password, 10);
    try {
        await db.collection('users').insertOne({ email, name, password: passwordHash });
        return res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
        return console.log("deuruim", e);
    }
})

app.get("/sing-up", async (req, res) => {

    try {
        return res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
        return console.log("deuruim", e);
    }
})

app.post("/sign-in", async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });
        if (user && bcrypt.compareSync(senha, user.senha)) {
            console.log("sucesso, usuário encontrado com este email e senha!");
            // sucesso, usuário encontrado com este email e senha!
        } else {
            console.log("usuário não encontrado (email ou senha incorretos)");
            // usuário não encontrado (email ou senha incorretos)
        }

    } catch (e) {
        console.log(e);
    }
});




