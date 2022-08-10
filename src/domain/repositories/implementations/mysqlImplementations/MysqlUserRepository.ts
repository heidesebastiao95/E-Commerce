import { User } from "../../../entities/User";
import { User as M_User } from "./resources/models/User";
import { IUserRepository } from "../../Interfaces/IUserRepository";
import {RowDataPacket, OkPacket, ResultSetHeader} from "mysql2";

export class MysqlUserRepository implements IUserRepository {
    private users:User[] = [];

    constructor() {
        
    }

    async save(user: User): Promise<User> {
        this.users.push(user);

        return user;
    }

    async findByEmail(email: string): Promise<User | undefined>  {
        const user = this.users.find(user => user.email == email);
        
        return user; 
    }

    async delete(email: string): Promise<boolean> {
        return true;
    }

    async getAll(): Promise<RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader> {
        const users = await M_User.all();
        
        return users;
    }
}