/* un Ejemplo  de como se veria la ruta listar - modelo de categoria*/
const routerx = require('express-promise-router');
const CategoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');

const router = routerx();


router.get('/list', CategoriaController.list);
router.post('/add', CategoriaController.add);
router.put('/update', CategoriaController.update);
router.put('/activate', CategoriaController.activate);
router.put('/deactivate', CategoriaController.deactivate);


module.exports = router;