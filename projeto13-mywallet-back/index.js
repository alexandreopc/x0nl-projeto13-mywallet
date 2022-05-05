import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import joi from "joi";
//import dayjs from "dayjs"
import { v4 as uuid } from 'uuid';

import db from "./db.js";

const app = express();
app.use(json(), cors());
dotenv.config();
const token = uuid();

app.post("/sing-up", (req, res) => {
    const { email, name, password } = req.body;

    try {
        const passwordHash = bcrypt.hashSync(password, 10);
        await db.collection('users').insertOne({ email, name, password: passwordHash })
        res.sendStatus(201);
    } catch (e) {
        console.log(e);
    }
})




