"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ClientsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getClients(req, res) {
        res.send('Hello Clients');
    }
    getClient() {
    }
    createClients() {
    }
    updateClient() {
    }
    deleteClient() {
    }
    routes() {
        this.router.get('/clients', this.getClients);
    }
}
const clientsRoutes = new ClientsRoutes();
exports.default = clientsRoutes.router;
