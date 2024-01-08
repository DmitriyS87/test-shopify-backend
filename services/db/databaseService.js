
import { Pool } from 'pg';
import { sql, helpers } from 'pg-promise';

import dbConfig from './config.js';

class DatabaseService {
    constructor() {
        this.pool = new Pool(dbConfig);

        this.pool.on('error', (err) => {
            console.error('Unexpected error on idle client', err);
            process.exit(-1);
        });
    }

    async connect() {
        try {
            const client = await this.pool.connect();
            console.log('Connected to the database');
            return client;
        } catch (error) {
            console.error('Error connecting to the database:', error.message);
            throw error;
        }
    }

    async disconnect(client) {
        try {
            await client.release();
            console.log('Disconnected from the database');
        } catch (error) {
            console.error('Error disconnecting from the database:', error.message);
        }
    }

    async createTable(tableSchema) {
        try {
            await this.pool.query(tableSchema);
            console.log('Table created successfully');
        } catch (error) {
            console.error('Error creating table:', error.message);
            throw error;
        }
    }

    async dropTable(tableName) {
        try {
            await this.pool.query(`DROP TABLE IF EXISTS ${tableName} CASCADE;`);
            console.log(`Table ${tableName} dropped successfully`);
        } catch (error) {
            console.error('Error dropping table:', error.message);
            throw error;
        }
    }

    async executeQuery(query, params) {
        try {
            const result = await this.pool.query(query, params);
            return result.rows;
        } catch (error) {
            console.error('Error executing query:', error.message);
            throw error;
        }
    }

    async insertRecord(tableName, data) {
        try {
            const columns = Object.keys(data);
            const values = Object.values(data);
            const query = sql`
                INSERT INTO ${sql.identifier(tableName)} (${helpers.concat(columns)})
                VALUES (${helpers.concat(values)})
                RETURNING *;
            `;
            const result = await this.pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error inserting record:', error.message);
            throw error;
        }
    }

    async updateRecord(tableName, data, condition) {
        try {
            const updates = Object.entries(data).map(([key, value]) => sql`${sql.identifier(key)} = ${value}`);
            const query = sql`
                UPDATE ${sql.identifier(tableName)}
                SET ${sql.join(updates, ', ')}
                WHERE ${condition}
                RETURNING *;
            `;
            const result = await this.pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error updating record:', error.message);
            throw error;
        }
    }

    async deleteRecord(tableName, condition) {
        try {
            const query = sql`
                DELETE FROM ${sql.identifier(tableName)}
                WHERE ${condition}
                RETURNING *;
            `;
            const result = await this.pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error deleting record:', error.message);
            throw error;
        }
    }
}

export default DatabaseService;