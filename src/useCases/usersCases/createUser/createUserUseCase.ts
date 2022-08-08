import { User } from './../../../entities/User';
import { ICreateUserRequestDTO } from './createUserDTO';
import { IUserRepository } from './../../../repositories/UserRepository/IUserRepository';

export class CreateUserUseCase {
    constructor(
        private userRepository:IUserRepository
    ) {}
    async execute(data:ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if(userAlreadyExists) {
            throw new Error("User Already exists!"); 
        }

        const user = new User(data.name, data.email, data.password);
        this.userRepository.save(user);
    }
}