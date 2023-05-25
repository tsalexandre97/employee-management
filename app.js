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
const employees = [
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
// GET method users
app.get('/users', (req, res) => {
    res.status(200)
    return res
        .status(200)    
        .json(employees)
})

// GET method user individual
app.get('/users/:id', (req, res) => {
    const id = req.params.id

    const foundEmployee = employees.find(employee => employee.id == id)
    console.log(foundEmployee)
    if(foundEmployee){
        return res.json(foundEmployee)
    }
    // for(let employee of employees){
    //     if(employee.id === id){
    //         res.json(employee)
    //         return
    //     }
    // }

    res.status(404).send("Employee not found!")
    // res.send(req.params)
})

// POST method user
app.post('/users', (req, res) => {
    res.send("Cria novo usuário")
})

// PUT method user
app.put('/users/:id', (req, res) => {
    res.send(req.params)
})

// DELETE method user
app.delete('/users/:id', (req, res) => {
    res.send(req.params)
})

app.listen(3000, () => {
    console.log("App is running locally... http://localhost:3000")
})