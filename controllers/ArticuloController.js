const { Articulo } = require('../models/Index');

module.exports= {
    list : async (req, res, next) => {
        try{
            const re = await Articulo.findAll () // ({where: {user.id==x}})
            res.status(200).json(re)
        }catch(error)
        {
            res.status(500).json(['error']) 
            next(error)
        }
    },
    add : async (req, res, next) => {
        try{
            const article = await Articulo.findOne({where : { codigo : req.body.codigo}})
            if (article)
            {
                res.status(404).json(['El codigo de este producto ya esta registrado'])  
            }
            const re = await Articulo.create(req.body)
            res.status(200).json(re)
        }catch(error)
        {
            res.status(500).json(['error']) 
            next(error)
        }
        
    },
    update : async (req, res, next) => {


        try{
            const re = await Articulo.update({codigo: req.body.codigo, nombre:req.body.nombre, descripcion: req.body.descripcion, catagoriaId: req.body.categoriaId},{where: {id: req.body.id}})
            res.status(200).json(re)
        }catch(error)
        {
            res.status(500).json(['error']) 
            next(error)
        }
        
    },
    activate : async (req, res, next) => {
        try{
            const re = await Articulo.update({estado: 1},{where: {id: req.body.id}})
            res.status(200).json(re)
            
        }catch(error)
        {
            res.status(500).json(['error']) 
            next(error)
        }
        
    },
    deactivate : async (req, res, next) => {
        try{
            const re = await Articulo.update({estado: 0},{where: {id: req.body.id}})
            res.status(200).json(re)
            
        }catch(error)
        {
            res.status(500).json(['error']) 
            next(error)
        }
        
    }
    
}
