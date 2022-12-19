/**El controlador tiene que tener el mismo nombre que el archivo de las rutas el cual controla este, (ejem: routes/usuarios.js => controllers/usuarios.js) */
const {response,request} = require('express');

const usuariosGet = (req=request,res=response)=>{/**Llevar data hacia el usuario */
    const query = req.query;/**con esta propiedad 'query' del 'req' traigo los query params (que son argumetos opcionales) que me
    puede traer un end-point (ejem:http://localhost:8080/api/usuarios?q=hola&nombre=camilo&apikey=1234567890 ) lo que esta al lado derecho 
    del signo de interrogacion '?' en el end-point son los query params */

    const {q,nombre="No name",apikey,limit=1} = req.query;/**Desestructuro lo que me intereasa de los query params, lo conveniente de hacer desestruturacion 
    es que si to no envio algun valor correspondiente a alguna propiedad lo que hago es darle un valor por defecto, como en este caso
    que no voy a enviar el valor del parametro 'nombre' y lo reemplazo con un valor por defecto */
    res.json({
        msg:'get API - Controlador',
        q,
        nombre,
        apikey,
        limit,
        query
    })
}


const usuarioPost = (req,res=response)=>{/**Crear nueva data  */
    const body = req.body;/**Toda informacion que ven hacia el back se va a recicibir
    en el 'req' y podemos llamarla con el '.body' recordando que dicha informacion viene en 
    un formato json ya que asi fue como lo configuramos en el middleware de la aplicacion */

    const {nombre,edad} = req.body;/**Aqui aplico la desestructuracion de objetos y desestructuro 
    las propiedades que me viene en el 'req.body'  */
    res.status(201).json({
        msg:'post API - controlador',
        nombre,
        edad,
        body
        
    })
}

const usuariosPut = (req,res=response)=>{/**Actualizar data */

    const {id} = req.params/**Los parametros de los end-points se almacenan en el 'req.params' y 
    como el paramtro tiene como nombre 'id' hago o aplico desestructuracion y llamo ese argumento por su nombre  */
    
    res.status(400).json({
        msg:'put API - controlador',
        id
    })
}

const usuarioDelete = (req,res=response)=>{/**Eliminar data  */
    res.json({
        msg:'delete API - controlador'
    })
}

const usuarioPatch = (req,res=response)=>{
    res.status(500).json({
        msg:'patch API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch
}