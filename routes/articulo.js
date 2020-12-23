/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const ArticuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();


router.get('/list', ArticuloController.list);
router.post('/add', ArticuloController.add);
router.put('/update', ArticuloController.update);
router.put('/activate', ArticuloController.activate);
router.put('/deactivate', ArticuloController.deactivate);


module.exports = router;