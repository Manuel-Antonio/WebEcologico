import Image from "next/image";
import {formatearDinero} from "../helpers";
import axios from "axios";
import {toast} from "react-toastify";

const Orden = ({ orden }) => {
  const { id, nombre, fecha, total, pedido } = orden;

  const completarOrden = async () => {
    try {
      await axios.put(`/api/ordenes/${id}`)
      toast.success("Pedido Completado", {
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
    <div className="p-10 space-y-5 border-b last-of-type:border-0 ">
      <h1 className="text-2xl font-bold">Orden: {id}</h1>
      <p className="text-xl mt-5">
        Cliente: {nombre}
      </p>


      <div className="grid items-start lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-5">
        {pedido.map( producto => (
            <div key={producto.id} className="py-3 flex items-center">
                <div className="w-32">
                    <Image
                    width={400} 
                    height={500} 
                    src={producto.imagen} 
                    alt={`Imagen de ${producto.nombre}`}
                    />
                </div>
                <div className="p-5 space-y-2">
                    <h4 className="text-xl font-bold text-green-500">{producto.nombre}</h4>
                    <p className="text-lg font-bold">Cantidad: {producto.cantidad}</p>
                </div>
            </div>
        ) )}
      </div>
      <div className="lg:flex lg:items-center lg:justify-between shadow-lg p-10 w-full ">
            <p className="font-black text-4xl text-green-500">
                Total a pagar: {formatearDinero(total)}
            </p>
            <button 
            type="button" 
            className="bg-red-600 mt-8 lg:mt-0 text-white font-bold py-4 p-10 rounded-md uppercase"
            onClick={completarOrden}
            >
              Completado
            </button>
      </div>
    </div>
  );
};

export default Orden;
