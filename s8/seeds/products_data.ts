import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "Product 1", description: "Description 1", price: 100 },
        { name: "Product 2", description: "Description 2", price: 200 },
        { name: "Product 3", description: "Description 3", price: 300 },
        { name: "Product 4", description: "Description 4", price: 400 },
        { name: "Product 5", description: "Description 5", price: 500 },
        { name: "Product 6", description: "Description 6", price: 600 },
        { name: "Product 7", description: "Description 7", price: 700 },
        { name: "Product 8", description: "Description 8", price: 800 },
        { name: "Product 9", description: "Description 9", price: 900 },
        { name: "Product 10", description: "Description 10", price: 1000 }
    ]);
};
