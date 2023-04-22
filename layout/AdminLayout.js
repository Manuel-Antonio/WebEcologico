import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarAdmin from "@/components/SidebarAdmin";
import PasosAdmin from "@/components/PasosAdmin";
export default function Layout({ children, titulo }) {

  return (
    <>
      <Head>
        <title>EcoMak - {titulo}</title>
        <meta
          name="description"
          content="Administrador de tienda de reciclaje y cuidado del medio ambiente"
        />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/4 p-10 md:p-3 flex flex-col items-center">
          <SidebarAdmin/>
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-3/4 h-screen overflow-y-scroll">
          <div className="p-10">
            <PasosAdmin/>
            {children}
          </div>
        </main>
      </div>
    
      <ToastContainer />
    </>
  );
}
