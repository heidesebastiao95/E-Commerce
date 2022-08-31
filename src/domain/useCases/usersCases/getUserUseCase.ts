import { IUserRepository } from "../../../repositories/Interfaces/IUserRepository";
import { UserRequestDTO } from "../../RequestDTOs/UserDTO";

export class GetUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}

    async execute() {
        const users = await this.userRepository.getAll().then(users => {
            return users;
        });

       return users;
    }
}