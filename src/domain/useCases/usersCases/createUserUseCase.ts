
import { User } from '../../entities/User';
import { IUserRequestDTO } from './UserRequestDTO';
import { IUserRepository } from '../../repositories/Interfaces/IUserRepository';

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}
    async execute(data:IUserRequestDTO) {

        // const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        // if(userAlreadyExists) {
        //     throw new Error("User Already exists!"); 
        // }

        // const user = new User(data.name, data.email, data.password);
        // this.userRepository.save(user);

        return "hhh";
    }
}