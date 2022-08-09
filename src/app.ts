import express, { urlencoded } from 'express';
import cors from 'cors';
import { AdminRoutes } from './http/routes/Admin';


class App {
    public express : express.Application;

    constructor() {
        this.express = express();
        this.boot();
        this.routes();
    }

    private boot(): void {
        this.express.use(express.json());//informa ao node que use json
        this.express.use(cors());
        this.express.use(urlencoded({extended:true}));//permite capturar dados da requisicao usando formato json
    }

    private routes() : void {
        this.express.use(AdminRoutes);
    }
}

export default new App().express;

