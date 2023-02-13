import express from "express";

// Controllers imports
import { userController } from '../controllers/user.controllers.js';


// Token validate
import { validateToken } from "../middlewares/acessToken.middleware.js";

export class Routes {
    /**
     * @param app
     */
    initRoutes(app = express.application) {
        app.get('/', (req, res) => {
            res.send('hola mundo');
        });

        //Usuarios (Listar, Crear, Mostrar, Update, Delete)
        //app.route('/users', userController.find).get([validateToken.validateJWT], userController.find);
        app.get('/users', userController.find);
        app.post('/users', userController.create);
        app.post('/usersname', userController.finduser);
        app.route('/users/:id', userController.findByPk).get([validateToken.validateJWT], userController.findByPk);
        app.route('/users/:id', userController.update).put([validateToken.validateJWT], userController.update);
        app.route('/users/:id', userController.delete).delete([validateToken.validateJWT], userController.delete);

        app.post('/login', userController.login);

    }
}