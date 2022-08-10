import Mysql from "../Connection";

type UserDTO = {
    name:string,
    email:string,
    password:string,
}

export class User {

    static async create(data: UserDTO) {

       return Mysql.execute(
            "INSERT INTO users (name, email, password) VALUES(?, ?, ?)",
            [
                data.name,
                data.email,
                data.password
            ]
        )
    }

   static async all() {

       const users = await Mysql.execute(
            "SELECT * FROM users"
        );

        return users[0];
    }
}