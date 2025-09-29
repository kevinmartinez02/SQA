import { describe, it, expectTypeOf, expect, } from "vitest";

import { getProducts } from "../src/service";
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface ProductResponse {
    name: string;
    description: string;
    price: number;
    id: number;
}

describe('Products', async () => {
    it('should return a product', async () => {
        const product  = await getProducts() as any; 
        product?.forEach((item: any) => {
            expect(item).toHaveProperty('name');
            expect(item).toHaveProperty('description');
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('price');
            expect(item).toHaveProperty('created_at');
        })

    })

})