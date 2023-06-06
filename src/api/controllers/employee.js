import  {pool, DB} from "../data/db.js"

const table = "logs"

const getDataEmployee = () => {
    const instanceClass = new DB();
    const query = `SELECT * FROM ${table}`
    const result = instanceClass.list(query)
    console.log(result)
    return result
}

const postDataEmployee = (data) => {
    const instanceClass = new DB();
    const query = `INSERT INTO ${table}(id_usuario, evento, categoria, acao, descricao, dispositivo, modelo, plataforma, navegador, geolocalizacao, tempo_ini, tempo_fim) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`
    const result = instanceClass.insert(data, query)
    console.log(result)
    return result
}

const deleteDataEmployee = (data) => {
    const instanceClass = new DB();
    const query = `DELETE FROM ${table} WHERE id_usuario = $1`
    const result = instanceClass.delete(data, query)
    console.log(result)
    return result
}

export {getDataEmployee, postDataEmployee, deleteDataEmployee}