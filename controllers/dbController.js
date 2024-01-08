const { default: DatabaseService } = require("../services/db/databaseService");

const databaseService = new DatabaseService();

const createTable = async (req, res) => {
    try {
        const client = await databaseService.connect();
        await databaseService.createTable('CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, name VARCHAR(255));');
        await databaseService.disconnect(client);
        res.json({ message: 'Table created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const dropTable = async (req, res) => {
    try {
        const client = await databaseService.connect();
        await databaseService.dropTable('test');
        await databaseService.disconnect(client);
        res.json({ message: 'Table dropped successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertRecord = async (req, res) => {
    try {
        const client = await databaseService.connect();
        const record = await databaseService.insertRecord('test', { name: 'John' });
        await databaseService.disconnect(client);
        res.json(record);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export default DBController = {
    createTable,
    dropTable,
    insertRecord,
};
