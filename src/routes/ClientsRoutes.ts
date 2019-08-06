import {Request, Response, Router} from 'express';

class ClientsRoutes{
    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    getClients(req : Request, res :Response){
        res.send('Hello Clients');
    }

    getClient(){

    }

    createClients(){

    }

    updateClient(){

    }

    deleteClient(){

    }

    routes(){
        this.router.get('/clients', this.getClients);
    }

    
}

const clientsRoutes = new ClientsRoutes();
export default clientsRoutes.router;