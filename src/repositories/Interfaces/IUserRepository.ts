import { User } from '../../domain/entities/User';
import { UserRequestDTO } from '../../domain/RequestDTOs/UserDTO';

export interface IUserRepository {
    findByEmail(email:string):Promise<any>;
    save(user:User): Promise<any>;
    delete(email: string): Promise<any>;
    getAll(): Promise<any>;
    update(id:string, data:UserRequestDTO): Promise<any>;
}