import Layout from "@/layout/Layout";
import useReciclaje from "@/hooks/useReciclaje";
import ResumenProducto from "@/components/ResumenProducto";
import { formatearDinero } from "@/helpers";
import { LottiesResumen } from "@/components/Lotties";
export default function Resumen() {
  const { pedido, total } = useReciclaje();

  return (
    <Layout titulo="Resumen">
      <h1 className="text-4xl font-black uppercase">Resumen</h1>
      <p className="text-2xl mt-5">
        Administra tus productos reciclables fácilmente en nuestro sitio
      </p>
      {pedido.length !== 0 && (
        <div className="flex items-center justify-between">
          <p className="text-4xl mt-10">
            Total a pagar: {""}{" "}
            <span className="font-black text-sky-600">
              {formatearDinero(total)}
            </span>
          </p>
          <p className="text-4xl font-black">{pedido.length} productos</p>
        </div>
      )}

      <div className="mt-5 space-y-10">
        {pedido.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-center text-2xl mt-20 mb-20">
              No hay elementos en tu pedido
            </p>
            <LottiesResumen />
          </div>
        ) : (
          pedido.map((producto) => (
            <ResumenProducto key={producto.id} producto={producto} />
          ))
        )}
      </div>
    </Layout>
  );
}
