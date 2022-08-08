import { User } from './../../entities/User';

export interface IUserRepository {
    findByEmail(user:User): Promise<User>;
    save(user:User): Promise<User>;
}