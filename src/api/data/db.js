import { Pool } from "pg";

// Connection
const pool = new Pool({
    user: process.env.PG_USER_DEV,
    host: process.env.PG_HOST_DEV,
    password: process.env.PG_PASSWORD_DEV,
    database: process.env.PG_DATABASE_DEV,
    port: process.env.PG_PORT_DEV
});

// Class
class DB{
    
    async list(query){
        const result = await pool.query(query)
        return result
    }

    insert(data, query){
        
        let arr = new Array()
        for(const x in data){
            arr.push(data[x])
        }

        const result = pool.query(query, arr, (err, res) => {
            console.log(err ? err : res)
        })

        return result
    }

    delete(data, query){
        let arr = new Array()
        for(const x in data){
            arr.push(data[x])
        }

        const result = pool.query(query, arr, (err, res) => {
            console.log(err ? err : res)
        })
        return result
    }
}

export {pool, DB} 