


module.exports = app => {
    const controller = require('../controllers/event')();
  
    app.route('/api/v1/event')
      .get(controller.event)
      .post(controller.event)

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
}