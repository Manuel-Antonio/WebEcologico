import { formatearDinero, formatearFecha } from "@/helpers";
import axios from "axios";
import {toast} from "react-toastify";

const OrdenCompletada = ({ orden }) => {
  const { id, nombre, fecha, total, pedido } = orden;

  const eliminarPedidoCompletado = async () => {
    try {
        await axios.delete(`/api/ordenes/${id}`);
        toast.success("Orden eliminada", {
            autoClose: 300,
            theme: "dark",
            pauseOnHover: false,
          });
    } catch(error) {
        toast.error("Hubo un error", {
            autoClose: 300,
            theme: "dark",
            pauseOnHover: false,
          });
    }
  }
  return (
    <div className="shadow-md rounded-md p-5">
      <p className="font-bold text-2xl">Orden: {id}</p>
      <p className="text-lg mb-5">{formatearFecha(fecha)}</p>
      <h3 className="text-xl">Cliente: {nombre}</h3>

      <p className="text-xl">Compras: {pedido.length}</p>
      <p className="text-xl">
        Pagado: {""}
        <span className="text-green-500 font-black">
          {formatearDinero(total)}
        </span>
      </p>
      <button
      type="button"
      className="bg-red-600 hover:bg-red-700 transition-all text-white font-bold uppercase p-3 w-full mt-5 rounded-md"
      onClick={eliminarPedidoCompletado}
      >
        Eliminar
      </button>
    </div>
  );
};

export default OrdenCompletada;
