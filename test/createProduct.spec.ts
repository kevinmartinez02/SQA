import { describe, it, expect } from "vitest";
import { createProduct } from "../src/service";

describe('Create Product', async () => {
    it('should create a product', async () => {
        const product = await createProduct({ name: 'Product 45', description: 'prueba', price: 100.00});
        expect(product).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            price: expect.any(String),
            created_at: expect.any(Date),
            updated_at: expect.any(Date)
        });
    })
})