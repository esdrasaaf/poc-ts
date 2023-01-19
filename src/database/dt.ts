import pg from 'pg';

const { Pool } = pg;

const connection = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'esdras2803',
    database: 'poc_ts'
});

export default connection;