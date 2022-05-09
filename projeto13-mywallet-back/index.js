import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";

import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(authRouter)

// app.get("/sing-up", async (req, res) => { ISSO AINDA NAO USEI

//     try {
//         return res.sendStatus(201);
//     } catch (e) {
//         res.sendStatus(400);
//         return console.log("deuruim", e);
//     }
// })

app.listen(5000, () => console.log(`Server rodando na porta 5000`))
