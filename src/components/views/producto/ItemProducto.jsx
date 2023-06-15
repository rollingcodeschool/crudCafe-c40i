import { Button } from "react-bootstrap";
import { borrarProducto, obtenerProductos } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, setProductos }) => {
  const eliminarProducto = () => {
    //todo: agregar la consulta de sweetalert para preguntar si esta seguro que quiere borrar
    borrarProducto(producto.id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto eliminado",
          `El producto ${producto.nombreProducto} fue eliminado correctamente`,
          "success"
        );
        //recargar la tabla
        obtenerProductos().then((respuesta) => {
          if (respuesta) {
            setProductos(respuesta);
          }
        });
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El producto ${producto.nombreProducto} no pudo ser eliminado`,
          "error"
        );
      }
    });
  };

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Button className="btn btn-warning">Editar</Button>
        <Button variant="danger" onClick={eliminarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
