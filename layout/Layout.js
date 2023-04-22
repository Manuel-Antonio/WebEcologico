import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import Modal from "react-modal";
import useReciclaje from "@/hooks/useReciclaje";
import ModalProducto from "@/components/ModalProducto";
import { ToastContainer } from "react-toastify";
import Pasos from "@/components/Pasos";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px"
  },
};

Modal.setAppElement("#__next");

export default function Layout({ children, titulo }) {
  const { modal } = useReciclaje();
  return (
    <>
      <Head>
        <title>EcoMak - {titulo}</title>
        <meta
          name="description"
          content="Reciclaje y cuidado del medio ambiente"
        />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/4 p-10 md:p-3 flex flex-col items-center">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-3/4 h-screen overflow-y-scroll">
          <div className="p-10">
            <Pasos />

            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}

      <ToastContainer />
    </>
  );
}
