import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { initializeSocketServer } from './sockets/socketServer';
import {errorHandler} from './middlewares/errorHandler';
import userRoutes from "./routes/userRoutes"
import { ConnectToMongo } from './config/mongo';
import appointmentRoutes from "./routes/appointmentRoutes"
import dotenv from "dotenv"
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const httpServer = createServer(app);

ConnectToMongo();
// Initialize Socket.IO
const io = initializeSocketServer(httpServer);

// Default route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Socket.IO Server</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }
            h1 {
                color: #4a4a4a;
            }
            .info {
                background-color: #f4f4f4;
                border-left: 5px solid #5c6bc0;
                padding: 15px;
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body>
        <h1>You have communicated with the server</h1>
        <div class="info">
            <p>This is the main route of the server, below here you will see docs</p>
        </div>
    </body>
    </html>
  `);
});

app.use("/users",userRoutes)
app.use("/appointments",appointmentRoutes)
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
