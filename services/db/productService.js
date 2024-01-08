import { Image, Product } from "../../core/db.js";

async function createProduct(productData) {
    try {
        const product = await Product.create(productData);
        return product;
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
}

async function getAllProducts() {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Image,
                    as: 'images',
                    attributes: ['url'],
                },
            ],
        });
        return products;
    } catch (error) {
        throw new Error(`Error fetching products: ${error.message}`);
    }
}

async function getProductById(id) {
    try {
        const product = await Product.findByPk(id);
        return product;
    } catch (error) {
        throw new Error(`Error fetching product: ${error.message}`);
    }
}

async function updateProduct(id, updatedData) {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error('Product not found');
        }

        await product.update(updatedData);
        return product;
    } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
}

async function deleteProduct(id) {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error('Product not found');
        }

        await product.destroy();
        return 'Product deleted successfully';
    } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
}

async function updateOrCreateProduct(productData) {
    try {
        const [product, created] = await Product.findOrCreate({
            where: { shopify_id: productData.shopify_id },
            defaults: productData,
        });
        if (!created) {
            await Product.update(productData, {
                where: { shopify_id: product.shopify_id },
            });
        }
        return product;
    } catch (error) {
        console.error('Error updating or creating product:', error);
        throw error;
    }
}

const ProductService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    updateOrCreateProduct,
};

export default ProductService;