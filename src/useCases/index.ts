
import { CreateUserController } from '../http/controllers/admin/usersControllers/CreateUserController';
import { MysqlUserRepository } from './../repositories/implementations/mysqlImplementations/MysqlUserRepository';
import { CreateUserUseCase } from './usersCases/createUserUseCase';

class Transporter {

    private mysqlUserRepository: MysqlUserRepository;
       

    constructor() {
        this.mysqlUserRepository = new MysqlUserRepository();
    }

    private initializeCreateUserUseCase(): CreateUserUseCase {
        return new CreateUserUseCase(this.mysqlUserRepository);
    }

    private initializeCreateUserController(): CreateUserController {
        return new CreateUserController(this.initializeCreateUserUseCase());
    }

    public getCombination() {
        const createUserUseCase = this.initializeCreateUserUseCase();
        const createUserController = this.initializeCreateUserController();

        return {
            //Controllers
            "createUserController":createUserController,
            //USeCases
            "createUserUseCase": createUserUseCase
        };
    }
}

export default new Transporter().getCombination();