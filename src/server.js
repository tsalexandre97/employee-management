const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const pool = require('./api/data/db')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Projeto API com Node.js, Express, e Postgres' })
})

app.get('/employee', (request, response) => {
    pool.query('SELECT * FROM employee', (error, results) => {
        if(error){
            response.status(404).send('Erro 404, usuarios nao encontrados!')
        }
        response.status(200).json(results.rows)
    })
})

app.get('/employee/:id', (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM employee WHERE id = $1', [id], (error, results) => {
        if(error){
            response.status(404).send('Erro 404, usuario nao encontrado!')
        }
        response.status(200).json(results.rows)
    })
})

app.post('/employee', (request, response) => {
    const { nome, ativo, foto } = request.body

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = ano + '-' + mes + '-' + dia

    pool.query('INSERT INTO employee (nome, ativo, foto, created_at) VALUES ($1, $2, $3, $4) RETURNING *', [nome, ativo, foto, dataAtual], (error, results) => {
        if(error){
            throw error
        }
        response.status(201).send(`Usuário adicionado com id: ${results.rows[0].id}`)
    })
})

app.put('/employee/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, ativo, foto} = request.body
    pool.query('UPDATE employee SET nome = $1, ativo = $2, foto = $3 WHERE id = $4', [nome, ativo, foto, id], (error, results) => {
        if(error){
            response.status(404).send('Erro 404, usuario nao encontrado!')
        }
        response.status(200).send(`Usuário modificado com id: ${id}`)
    })
})

app.delete('/employee/:id', (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM employee WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).send(`Usuário deletado com id: ${id}`)
    })
})

app.listen(3000, () => {
    console.log(`Servidor rodando: http://localhost:3000`)
})