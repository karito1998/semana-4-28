const { Usuario } = require('../models/');
const bcrypt = require('bcryptjs')
const servicioToken = require('../services/token')


module.exports= {
    list : async (req, res, next) => {
        try{
            const re = await Usuario.findAll () // ({where: {user.id==x}})
            res.status(200).json(re)
        }catch(error)
        {
            res.status(500).json(['error']) 
            next(error)
        }
    },
    register : async (req, res, next) => {
        
        try{
            res.status(200).send('Reto 3')    
        }catch(error)
        {
            res.status(500).json(['error']) 
            next(error)
        }
    },

    add : async (req, res, next) => {
        try{
            const user = await Usuario.findOne({where : { email : req.body.email}})
            if (user)
            {
                res.status(404).json(['El correo ya esta registrado'])  
            }
            else{
            //const token = servicioToken.encode(reg.body.password)
            const re = await Usuario.create({rol : req.body.rol, nombre: req.body.nombre, password : bcrypt.hashSync(req.body.password), email: req.body.email, estado : req.body.estado})
            res.status(200).json(re)            
            }
        }catch(error)
        {
            res.status(500).json(['error']) 
            next(error)
        }
        
    },
    login : async (req, res, next) => {

    try {
            const user = await Usuario.findOne( { where :  { email : req.body.email } } )
            if(user){
                // Evaluar contraseña
                const contrasenhaValida = bcrypt.compareSync(req.body.password, user.password)
            if (contrasenhaValida)
            {
                const token = servicioToken.encode(user.id, user.rol)

                res.status(200).send({
                    auth : true,
                    tokenReturn : token,
                    user : user
                })

            }  else {
                res.status(401).send({ auth: false, tokenReturn: null, reason: "Invalid Password!"})
            }

        } else {
            res.status(404).send({ 'error' : 'Usuario no encontrado' })
        }

    } catch (error) {
        res.status(500).json({ 'error' : 'Oops paso algo' })
        next(error)
    }


}
}
