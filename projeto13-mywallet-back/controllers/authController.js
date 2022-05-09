import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import db from "./../db.js";

export async function signUp(req, res) {
    const { email, name, password } = req.body;
    const SALT = 10; //colocar na .env
    const passwordHash = bcrypt.hashSync(password, SALT);

    try {
        const userVerification = await db.collection('users').findOne({ email });
        if (userVerification)
            return res.status(409).send("email ja em uso")
    } catch (e) {
        res.status(500).send(e)
    }

    try {
        await db.collection('users').insertOne({ email, name, password: passwordHash });
        res.sendStatus(201)
    } catch (e) {
        res.status(500).send(e)
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            console.log("sucesso, usuário encontrado com este email e senha!");
            const token = uuid()

            await db.collection("sessions").insertOne({
                userId: user._id,
                token
            })
            res.status(200).send(token)

        } else {
            console.log("usuário não encontrado (email ou senha incorretos)");
            res.sendStatus(404)

        }
    } catch (e) {
        res.status(500).send(e)
    }
}