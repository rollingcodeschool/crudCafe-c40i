// llamar la variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;

/*
GET devuelven una lista de elementos, puede devolver un elemento.
POST permiten agregar elementos.
PUT / PATCH permiten modificar elementos.
DELETE  permiten eliminar un elementos.
*/ 
export const login = ()=>{
    console.log(URL_usuario)
}