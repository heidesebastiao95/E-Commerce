import { IUserRepository } from './../../../repositories/UserRepository/IUserRepository';

export class CreateUserUseCase {
    constructor(
        private userRepository:IUserRepository
    ) {}
    async execute() {

    }
}