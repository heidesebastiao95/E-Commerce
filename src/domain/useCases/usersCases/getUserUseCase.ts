import { IUserRepository } from "../../repositories/Interfaces/IUserRepository";

type Options = {
    name?: string,
    email?:string,
    role?:string,
}

export class GetUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}

    async execute() {
        
       return this.userRepository.getAll();
    }
}