//Middleware de autenticacion;
const tokenService = require('../services/token');

module.exports = {
    verifyUsuario: async(req, res, next) => {
        try{
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'administrador' || response.rol == 'vendedor' || response.rol == 'almacenero') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
    catch (error){
        return res.status(500).send({
            message: 'Error'
        });
    }
    }, 
    verifyAdministrador: async(req, res, next) => {
        try{
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'administrador' ) {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
    catch (error){
        return res.status(500).send({
            message: 'Error'
        });
    }
    },

}