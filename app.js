import express from "express"
import bodyParser from "body-parser" 
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

const app = express()
app.use(helmet());
app.use(bodyParser.json())
app.use(cors());
app.use(morgan('combined'));

// GET method route
app.get('/', (req, res) => {
    res.status(200);
    res.send('Homepage')
    res.end();
})

// GET method users
app.get('/users', (req, res) => {
    res.status(200)
    const data = {
        employee: [
            {
                id: 1,
                name: "Mané Garrincha",
                photo: "https://bonifacio.net.br/wp-content/uploads/201031-Mane-Garrincha.jpg",
                status: "active"
            },
            {
                id: 2,
                name: "Pele",
                photo: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb39bbf02afd7486f/639ce77ef530196d7f93a9f4/Pel%C3%A9_1970.jpg?auto=webp&format=pjpg&width=3840&quality=60",
                status: "active"
            },
        ]
    }
    res.json(data)
})

// GET method user individual
app.get('/users/:id', (req, res) => {
    res.send(req.params)
})

app.listen(3000, () => {
    console.log("App is running locally... http://localhost:3000")
})