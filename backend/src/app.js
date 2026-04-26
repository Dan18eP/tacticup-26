import express from "express";
import cors from "cors";


dotenv.config();

const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    }));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
    message: "TactiCup 26 API running",
    status: "ok",
    });
});

export default app;