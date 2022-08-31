import { UserRequestDTO } from "../../../../../domain/RequestDTOs/UserDTO";
import Mysql from "../Connection";

export class User {

    static async create(data: UserRequestDTO) {

        const fields = Object.getOwnPropertyNames(data);
        const values = Object.values(data);
        var constraints = Object.values(data).map(val => {return val = "?"});

       return await Mysql.execute(
        `INSERT INTO users (${fields.toString()}) VALUES(${constraints.toString()})`, values 
       ).then(val => { return val[0]})
    }

   static async all() { 

        return await Mysql.execute(
            "SELECT * FROM users"
        ).then( val => { 
            return val[0];
        });
    }

   static async update(id: string, data: UserRequestDTO) {

        const fields = Object.getOwnPropertyNames(data).map(val => {return val += "= ?"});
        const values = Object.values(data).push(id);

        return await Mysql.execute(`UPDATE users set ${fields.toString()} WHERE id = ?`, values )
        .then(val => {
            return val;
        });
   }

   static async delete(id:string) {
       return await Mysql.execute(
           "DELETE users WHERE id = ?", [id]
       ).then(val => { return val[0]});
   }

   static async findByEmail(email:string) {
       return Mysql.execute(
           "SELECT * FROM users WHERE email = ?",[email]
       ).then(val => {return val[0]});
   }


}