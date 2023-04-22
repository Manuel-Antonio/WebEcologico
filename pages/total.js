import Layout from "@/layout/Layout";
import { useEffect, useCallback } from "react";
import useReciclaje from "@/hooks/useReciclaje";
import { formatearDinero } from "@/helpers";
import { LottiesTotal } from "../components/Lotties";
export default function Total() {
  const { pedido, nombre, setNombre, submitPedido, total } = useReciclaje();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);
  return (
    <Layout titulo="Total">
      <h1 className="text-4xl font-black uppercase">
        Total y Confirmar Pedido
      </h1>
      <p className="text-2xl mt-5">
        Confirma tu compra de productos reciclados y realiza el pago de manera
        segura
      </p>
      <form onSubmit={submitPedido}>
        <div className="mt-10">
          <label
            htmlFor="nombre"
            className="block uppercase text-slte-800 font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""}{" "}
            <span className="font-black text-sky-600 text-3xl">
              {formatearDinero(total)}
            </span>
          </p>
        </div>
        <div className="mt-10">
          <input
            type="submit"
            value="Confirmar Pedido"
            className={`${
              comprobarPedido()
                ? "bg-green-200 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-800 transition-all cursor-pointer"
            } uppercase text-center text-white font-bold w-full lg:w-auto px-5 py-3 rounded `}
            disabled={comprobarPedido()}
          />
        </div>
      </form>

      <div className="lg:absolute lg:top-1/4 flex justify-center md:justify-normal lg:left-2/3 mt-10">
        <LottiesTotal />
      </div>
    </Layout>
  );
}
