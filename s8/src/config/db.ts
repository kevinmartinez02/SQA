import knex from "knex";
import knexfile from "../../../knexfile";

const conectionLocal = {
    client:'pg',
    connection:{
        host:'localhost',
        port:5432,
        user:'postgres',
        password:'postgres',
        database:'postgres'
    }
}
const db = knex({
    ...conectionLocal
});

export default db;