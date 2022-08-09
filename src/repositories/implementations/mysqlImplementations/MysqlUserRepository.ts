import { User } from "../../../entities/User";
import { IUserRepository } from "../../Interfaces/IUserRepository";

export class MysqlUserRepository implements IUserRepository {
    private users:User[] = [];

    async save(user: User): Promise<User> {
        this.users.push(user);

        return user;
    }

    async findByEmail(email: string): Promise<User | undefined>  {
        const user = this.users.find(user => user.email == email);
        
        return user; 
    }
}