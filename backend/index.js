import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import songRouter from "./routes/song.route.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use('/songs', songRouter);
app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
})

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => {
            console.log("backend started on port http://localhost:8080")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();
