import { IUserRepository } from "../../../repositories/Interfaces/IUserRepository";
import { UserRequestDTO } from "../../RequestDTOs/UserDTO";


export class UpdateUserUseCase {

    constructor(
        private userRepository:IUserRepository
    ) {}

    async execute(id: number, data: UserRequestDTO) {

        const userUpdated = await this.userRepository.update(id,data);

    }
}