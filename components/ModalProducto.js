import useReciclaje from "@/hooks/useReciclaje";
import Image from "next/image";
import { formatearDinero } from "@/helpers";
import { useState, useEffect } from "react";

const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido, pedido } =
    useReciclaje();
  const { nombre, imagen, precio, material, tamanio, color } = producto;

  let [cantidad, setCantidad] = useState(1);
  let [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const productoActual = pedido.find(
        (pedidoState) => pedidoState.id === producto.id
      );
      setEdicion(true);
      setCantidad(productoActual.cantidad);
    }
  }, [pedido]);

  return (
    <div className="flex m-3 md:m-0 items-center ">
      <div className="w-1/2 md:w-1/3">
        <Image
          width={400}
          height={500}
          src={imagen}
          alt={`Imagen de ${nombre}`}
        />
      </div>
      <div className="w-1/2 md:w-2/3 p-8">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-4xl font-bold mt-5">{nombre}</h1>
        <p className="mt-2 text-lg">{`${material} - ${tamanio} - ${color}`}</p>
        <p className="mt-5 font-black text-5xl text-green-700">
          {formatearDinero(precio)}
        </p>
        <div className="flex items-center gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (cantidad < 2) {
                return;
              }
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="text-3xl">{cantidad}</span>
          <button
            type="button"
            onClick={() => {
              if (cantidad > 4) {
                return;
              }
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className={`${
            edicion
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-700 hover:bg-green-800"
          }  uppercase  px-5 py-3 mt-5 text-white font-bold rounded`}
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
        >
          {edicion ? "Guardar Cambios" : "Añadir al pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
