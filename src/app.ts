import express, { urlencoded } from 'express';
import cors from 'cors';

class App {
    public express : express.Application;

    constructor() {
        this.express = express();
        this.boot();
        this.routes();
    }

    private boot(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(urlencoded({extended:true}));
    }

    private routes() : void {
        this.express.get('/',(request, response) => {
            return response.send("Hello World");
        });
    }
}

export default new App().express;

