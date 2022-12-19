const {Router} = require("express");/**Desestructuro una funcion que maneja express para el tema de las rutas */
const { usuariosGet, usuariosPut, usuarioPatch, usuarioDelete, usuarioPost } = require("../controllers/usuarios");

const router = Router();/**guardo dicha funcion en una constante */


/**Lo que voy a hacer es separar lo que son los controladores digase el contenido de callback de cada metodo, dejando solo su 
 * end-point y su callback
*/

router.get('/',usuariosGet)/**Llevar data hacia el usuario */

router.post('/',usuarioPost);/**Crear nueva data  */

router.put('/:id',usuariosPut);/**Actualizar data */ /**Para yo poder recibir un argumento desde el end-point tengo que colocar
/:<nombre_argumento> => /:id(que lo que voy a pedir y recibir es el id de un objeto)  */

router.delete('/',usuarioDelete);/**Eliminar data  */

router.patch('/',usuarioPatch);

module.exports = router;