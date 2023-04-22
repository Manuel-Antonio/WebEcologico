import AdminLayout from "@/layout/AdminLayout";
import OrdenCompletada from "@/components/OrdenCompletada";
import axios from "axios";
import useSWR from "swr";
import { LottiesCompletado} from "@/components/Lotties";

export default function completados() {
  const fetcher = () =>
    axios("http://localhost:3000/api/completado").then((datos) => datos.data);

  const { data, error, isLoading } = useSWR("/api/completado", fetcher, {
    refreshInterval: 100,
  });
  return (
    <AdminLayout titulo="Ordenes Completados">
      <h1 className="text-4xl font-black uppercase">Ordenes Completadas</h1>
      <p className="text-2xl mt-5">
        Visualiza tus pedidos completados fácilmente en nuestro sitio
      </p>
      <div>
        {data && data.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
            {data?.map((orden) => (
              <OrdenCompletada key={orden.id} orden={orden} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-center text-2xl mt-20 mb-20">
              No hay ordenes completadas
            </p>
            <LottiesCompletado />
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
