import { User } from "../../../domain/entities/User";
import { User as M_User } from "./resources/models/User";
import { IUserRepository } from "../../Interfaces/IUserRepository";
import { UserRequestDTO } from "../../../domain/RequestDTOs/UserDTO";

export class MysqlUserRepository implements IUserRepository {

    constructor() {
        
    }

    async save(user: User) {
       return await M_User.create(user);
    }

    async findByEmail(email: string) {
        return await M_User.findByEmail(email);
    }

    async delete(id: string) {
        return await M_User.delete(id);
    }

    async getAll() {
        return await M_User.all().then(users => { return users});
    }

    async update(id:string, data:UserRequestDTO) {
        return await M_User.update(id,data);
    }
}