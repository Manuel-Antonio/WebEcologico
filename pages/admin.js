import Orden from "@/components/Orden";
import AdminLayout from "../layout/AdminLayout";
import axios from "axios";
import useSWR from "swr";
import {LottiesPendiente} from "@/components/Lotties";

export default function Admin() {

    const fetcher = () => axios("http://localhost:3000/api/ordenes").then(datos => datos.data);

    const {data, error, isLoading} = useSWR("/api/ordenes", fetcher, {refreshInterval:300}); 

  return (
    <AdminLayout titulo="Ordenes Pendientes">
      <h1 className="text-4xl font-black uppercase">Ordenes Pendientes</h1>
      <p className="text-2xl mt-5">
        Administra tus pedidos fácilmente en nuestro sitio
      </p>
        {data && data.length ? data?.map(orden => (
        <Orden
        key={orden.id}
        orden={orden}
        />
        )) : (
          <div className="flex flex-col items-center">
            <p className="text-center text-2xl mt-20 mb-20">
              No hay ordenes pendientes
            </p>
            <LottiesPendiente/>
          </div>
        )}
    </AdminLayout>
  );
}
