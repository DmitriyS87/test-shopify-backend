const db = {}

const { sql } = require('pg-promise')();

const createTable = async ({tableName}) => {
    try {
        await db.query(
            sql`
            CREATE TABLE IF NOT EXISTS ${tableName} (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL
            );
        `
        );
        console.log('Table "users" created successfully.');
    } catch (error) {
        console.error('Error creating table:', error.message);
    }
};

const dropTable = async () => {
    try {
        await db.query('DROP TABLE IF EXISTS users CASCADE;');
        console.log('Table "users" dropped successfully.');
    } catch (error) {
        console.error('Error dropping table:', error.message);
    }
};

module.exports = {
    createTable,
    dropTable,
};