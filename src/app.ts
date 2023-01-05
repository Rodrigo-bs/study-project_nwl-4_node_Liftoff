import express  from "express";
import bodyParser from "body-parser";

import routes from './routes/index.routes';

class App {
    public express;

    constructor () {
        this.express = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.express.use(bodyParser.json());
    }

    routes() {
        this.express.use(routes);
    }
}

export default new App().express;