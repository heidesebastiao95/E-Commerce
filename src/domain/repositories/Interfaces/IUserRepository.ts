import { User } from '../../entities/User';
import {RowDataPacket, OkPacket, ResultSetHeader} from "mysql2";

export interface IUserRepository {
    findByEmail(email:string): Promise<User | undefined>;
    save(user:User): Promise<User>;
    delete(email: string): Promise<boolean>;
    getAll(): Promise <RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader>;
}