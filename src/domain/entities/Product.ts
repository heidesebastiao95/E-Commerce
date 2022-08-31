export class Product {
    public name?: string;
    public price?: string;
    public categoryId?: string;
    public description?: string;

    constructor(
        name: string, price: string,
        categoryId: string, description: string
    ) {
        this.name = name;
        this.price = price;
        this.categoryId = categoryId;
        this.description = description;
    }
}