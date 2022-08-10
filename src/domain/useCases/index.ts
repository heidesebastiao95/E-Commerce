import { GetUserController } from './../../http/controllers/admin/usersControllers/GetUserController';
import { CreateUserController } from '../../http/controllers/admin/usersControllers/CreateUserController';
import { MysqlUserRepository } from './../repositories/implementations/mysqlImplementations/MysqlUserRepository';
import { CreateUserUseCase } from './usersCases/createUserUseCase';
import { GetUserUseCase } from './usersCases/getUserUseCase';

const mysqlUserRepository = new MysqlUserRepository();
class Transporter {

    constructor() {
        
    }

    private initializeUseCases(
        UserRepository: MysqlUserRepository
    ) {
        return {
            "createUseCase": new CreateUserUseCase(UserRepository),
            "getUserUseCase": new GetUserUseCase(UserRepository),
        }
    }

    private initializeControllers() {

        const useCases = this.initializeUseCases(mysqlUserRepository);

        return {
            "createUserController": new CreateUserController(useCases.createUseCase),
            "getUserController": new GetUserController(useCases.getUserUseCase)
        }
    }

    public Combine() {

        return this.initializeControllers()
    }
}

export default new Transporter().Combine();