import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../../../domain/useCases/usersCases/createUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async execute(request: Request , response: Response): Promise<Response> {
        var name: string =  request.body.name;
        var email: string =  request.body.email;
        var password: string =  request.body.password;

        try {
           await this.createUserUseCase.execute({name, email, password});

           return response.status(201).send();
        } catch (error) {
            
            return response.status(401).json({
                message: "unexpected error"
            }); 
        }
        
    }

    async  test(request: Request, response:Response): Promise<Response> {
        return response.send("From test");
    };
}