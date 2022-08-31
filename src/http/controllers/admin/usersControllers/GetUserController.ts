import { Request, response, Response } from 'express';
import { GetUserUseCase } from './../../../../domain/useCases/usersCases/getUserUseCase';

export class GetUserController {

    constructor(
        private getUserUseCase: GetUserUseCase
    ) {}

    public async execute(request: Request, response: Response): Promise<Response> {

      const users = await this.getUserUseCase.execute().then(users => {
        return users
      });
      
       return response.send("from get userController"+ users);
    }
    
}