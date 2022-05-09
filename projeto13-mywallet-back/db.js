import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
    await mongoClient.connect();
    db = mongoClient.db("wallet");
    console.log("Conexao com o banco de dados estabelecida");
} catch {
    console.log("Erro ao estabelecer conexao com o banco de dados", e);
}

export default db;