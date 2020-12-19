/* un Ejemplo  de como se veria la ruta listar - modelo del  usuario*/
const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = routerx();


router.get('/list', usuarioController.list);
router.post('/login', usuarioController.login);
router.get('/register', usuarioController.register);
router.post('/add', usuarioController.add);

module.exports = router;