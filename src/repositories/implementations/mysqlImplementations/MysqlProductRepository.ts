import { ProductDTO } from './../../../domain/RequestDTOs/ProductDTO';
import { IProductInterface } from '../../Interfaces/IProductRepository';
import { Product } from './resources/models/Product';

export class MysqlProductRepository implements IProductInterface {

     async save(data: ProductDTO) {

    }

    async all() {
        return await Product.all();
    }

    async update(data: ProductDTO): Promise<any> {
        
    }

    async delete(id: string) {
        
    }

    async findById(id: string): Promise<any> {
        
    }

}