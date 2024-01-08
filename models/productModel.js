const db = {}

const getAllProducts = async () => {
    const result = await db.query('SELECT * FROM products');
    return result.rows;
};

const getProductById = async (userId) => {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows[0];
};

const createProduct = async (user) => {
    const { name, email } = user;
    const result = await db.query('INSERT INTO users(name, email) VALUES($1, $2) RETURNING *', [name, email]);
    return result.rows[0];
};

const updateProduct = async (userId, updatedData) => {
    const result = await db.query('UPDATE users SET name = $2, email = $3 WHERE id = $1 RETURNING *', [
        userId,
        updatedData.name,
        updatedData.email,
    ]);
    return result.rows[0];
};

const deleteProduct = async (userId) => {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    return result.rows[0];
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};