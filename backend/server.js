require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const authRouter = require('./auth-router')
const contactRouter = require('./contact-router')
const categoryRouter = require('./categories-router')
const productRouter = require("./product-router")

const connectDB = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware');



const corsOption = {
    origin: "http://localhost:3000",
    method: "GET, POST, UPDATE, DELETE, PUT",
    credentials: true
}

app.use(cors(corsOption));
const bodyParser = require('body-parser');

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

const PORT = 1334;

app.use('/api/auth',authRouter)
app.use('/api/contact',contactRouter)
app.use('/api/categories',categoryRouter)
app.use('/api/products',productRouter)


app.use(errorMiddleware)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running at: ${PORT}` );
    });
})

