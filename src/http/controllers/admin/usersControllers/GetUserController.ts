import { Request, Response } from 'express';
import { GetUserUseCase } from './../../../../domain/useCases/usersCases/getUserUseCase';

export class GetUserController {

    constructor(
        private getUserUseCase: GetUserUseCase
    ) {}

    async execute(request: Request, response: Response): Promise<Response> {
      const users = await this.getUserUseCase.execute()

       return response.send("from get userController");
    }
    
}