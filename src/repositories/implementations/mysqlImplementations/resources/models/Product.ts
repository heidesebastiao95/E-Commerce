import { ProductDTO } from "../../../../../domain/RequestDTOs/ProductDTO";
import Mysql from "../Connection";

export class Product {
    
    static async create(data: ProductDTO) {
        
        const fields = Object.getOwnPropertyNames(data);
        const values = Object.values(data);
        var constraints = Object.values(data).map(val => {return val = "?"});

       return await Mysql.execute(
        `INSERT INTO products (${fields.toString()}) VALUES(${constraints.toString()})`, values 
       ).then(val => { return val[0]})
    }

    static async all() { 

        return await Mysql.execute(
            "SELECT * FROM products"
        ).then( val => { 
            return val[0];
        });
    }

    static async update(id: string, data: ProductDTO) {

        const fields = Object.getOwnPropertyNames(data).map(val => {return val += "= ?"});
        const values = Object.values(data).push(id);

        return await Mysql.execute(`UPDATE products SET ${fields.toString()} WHERE id = ?`, values )
        .then(val => {
            return val;
        });
   }

   static async delete(id:string) {

    return await Mysql.execute(
        "DELETE products WHERE id = ?", [id]
    ).then(val => { return val[0]});
   }

   static async findById(id:string) {
    
    return Mysql.execute(
        "SELECT * FROM products WHERE email = ?",[id]
    ).then(val => {return val[0]});
   }

}