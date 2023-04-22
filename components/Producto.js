import Image from "next/image";
import { formatearDinero } from "@/helpers";
import useReciclaje from "@/hooks/useReciclaje";
import { useState, useEffect } from "react";
const Producto = ({ producto }) => {
  const { handleClickProducto, handleChangeModal, pedido } = useReciclaje();
  const { nombre, imagen, precio, material, id } = producto;

  const [productoAgregado, setProductoAgregado] = useState(false);

  const modificarAspecto = () => {
    if (pedido.some((p) => p.id == id)) {
      setProductoAgregado(true);
    } else {
      setProductoAgregado(false);
    }
  };

  useEffect(() => {
    modificarAspecto();
  }, [pedido]);
  return (
    <div className="border">
      <Image
        width={600}
        height={400}
        src={imagen}
        alt={`Imagen de ${nombre}`}
        className="w-full"
      />
      <div className="contenido p-3">
        <h3 className="text-3xl font-bold">{nombre}</h3>
        <p className="text-xl mt-2">{material}</p>
        <p className="text-sky-600 text-4xl font-black mt-2">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className={`${
            productoAgregado
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-700 hover:bg-green-800"
          } rounded text-white font-bold p-3 w-full mt-5 uppercase`}
          onClick={() => {
            handleClickProducto(producto);
            handleChangeModal();
          }}
        >
          {productoAgregado ? "Modificar" : "Agregar"}
        </button>
      </div>
    </div>
  );
};

export default Producto;
