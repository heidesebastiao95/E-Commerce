import { GetUserController } from './../../http/controllers/admin/usersControllers/GetUserController';
import { CreateUserController } from '../../http/controllers/admin/usersControllers/CreateUserController';
import { MysqlUserRepository } from '../../repositories/implementations/mysqlImplementations/MysqlUserRepository';
import { CreateUserUseCase } from './usersCases/createUserUseCase';
import { GetUserUseCase } from './usersCases/getUserUseCase';
import { IUserRepository } from '../../repositories/Interfaces/IUserRepository';

class Transporter {

    constructor(
        private repository: IUserRepository
    ) {}

    private initializeUseCases() {
        return {
            "createUseCase": new CreateUserUseCase(this.repository),
            "getUserUseCase": new GetUserUseCase(this.repository),
        }
    }

    private initializeControllers() {

        const useCases = this.initializeUseCases();

        return {
            "createUserController": new CreateUserController(useCases.createUseCase),
            "getUserController": new GetUserController(useCases.getUserUseCase)
        }
    }

    public Combine() {

        return this.initializeControllers()
    }

}

export default new Transporter( new MysqlUserRepository()).Combine();
