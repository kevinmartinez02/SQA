import constants from "node:constants";
import db from "./config/db";

const getProducts = async () => {
    try {
        const products = await db('products').select('name', 'description', 'price','id').limit(5);
        if (!products) {
            return [];
        }
        return products;
    } catch (error) {
        return false;
    }
}

const getProduct = async (id: number) => {
   try {
    const product = await db('products').select('name', 'description', 'price','id').where('id', id).first();
    if (!product) {
        return [];
    }
    return product;
   } catch (error) {
    return false;
   }
}
interface Product {
    name: string;
    description: string;
    price: number;
}
const createProduct = async (product: any) => {
    try {
        const newProduct = await db('products').insert(product).returning('*');
        return newProduct[0];
    } catch (error) {
        return false;
    }
}


export { getProducts, getProduct, createProduct };