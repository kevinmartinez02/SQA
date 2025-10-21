import { describe, it, expect } from "vitest";
import { getProduct, getProducts, createProduct } from "../src/service";
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

describe('Products', async () => {
    it('should return a product', async () => {
        const result = await getProduct(1);
       
        expect(result).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number)
        });
    }) 
})

