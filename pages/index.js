import Layout from "@/layout/Layout";
import useReciclaje from "@/hooks/useReciclaje";
import Producto from "@/components/Producto";
export default function Home() {
  const { categoriaActual } = useReciclaje();
  return (
    <Layout titulo={categoriaActual?.nombre}>
      <h1 className="text-4xl font-black uppercase">{categoriaActual?.nombre}</h1>
      <p className="text-2xl mt-5">
      {categoriaActual?.descripcion}
      </p>
      <div className="mt-10 grid items-start grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-5">
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
