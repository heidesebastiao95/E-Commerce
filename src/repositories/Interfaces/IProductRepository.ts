import { ProductDTO } from './../../domain/RequestDTOs/ProductDTO';
import { Product } from "../../domain/entities/Product";

export interface IProductInterface {
    save(product: Product): Promise<any>;
    all(): Promise<any>;
    update(data: ProductDTO): Promise<any>;
    findById(id: string): Promise<any>;
    delete(id: string): void;

}