import express from "express"
const { default: employees } = await import("../data/trackEvents.json", {
    assert: {
        type: "json"
    }
})

const event = express()

event.route('/users')
    .get((req,res) => {
        res.status(200)
        res.json(employees)
    })
    .post((req,res) => {
        res.json({message: "Success"})
    })

event.route('/users/:id')
    .get((req,res) => {
        res.send('GET Individual User')
    })
    .put((req,res) => {
        res.send('PUT Individual User')
    })
    .delete((req,res) => {
        res.send('DELETE Individual User')
    })  

export {event}



// GET
// app.get('/users/:id', (req, res) => {
//     const id = req.params.id

//     const foundEmployee = employees.find(employee => employee.id == id)
//     console.log(foundEmployee)
//     if(foundEmployee){
//         return res.json(foundEmployee)
//     }

//     res.status(404).send("Employee not found!")
// })
