import { ProductDTO } from './../../domain/RequestDTOs/ProductDTO';
import { Product } from "../../domain/entities/Product";

export interface IProductInterface {
    save(product: Product): Promise<any>;
    getAll(): Promise<any>;
    update(data: ProductDTO): Promise<any>;
}