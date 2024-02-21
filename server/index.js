import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import songRouter  from "./routes/song.route.js";

dotenv.config();

const app = express();

const allowedOrigins = ['https://addis-music-lib.netlify.app/'];
app.use(cors(
    {origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }}));
app.use(express.json());
app.use('/songs',songRouter);
app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
})

const startServer = async () => {
    try {
        //     connect to DB
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => {
            console.log("server started on port http://localhost:8080")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();
