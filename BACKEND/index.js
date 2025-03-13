import express from 'express';
import cookieParser from 'cookie-parser';
import cros from 'cors';
import dotenv from "dotenv"
import connectDB from './utils/db.js';
dotenv.config({})

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // để xử lý dữ liệu phức tạp từ form nếu là true ví dự như nested object
app.use(cookieParser());

const corsOptions = {
    origin: 'http//localhost:5173',
    credentials: true
}
app.use(cros(corsOptions));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB()
    console.log("server chạy cổng: " + PORT);
});