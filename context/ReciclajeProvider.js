import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ReciclajeContext = createContext();

const ReciclajeProvider = ({ children }) => {
  // States
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();
  // Methods
  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  const handleClickCategoria = (id) => {
    const categoriaActual = categorias.filter((p) => p.id == id);
    setCategoriaActual(categoriaActual[0]);
    router.push("/");
  };

  const handleClickProducto = (prod) => {
    setProducto(prod);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...prod }) => {
    try {
      if (pedido.some((productoState) => productoState.id === prod.id)) {
        const pedidoActualizado = pedido.map((productoState) =>
          productoState.id === prod.id ? prod : productoState
        );
        setPedido(pedidoActualizado);
        toast.warn("Guardando cambios", {
          autoClose: 1000,
          theme: "dark",
          pauseOnHover: false,
        });
      } else {
        setPedido([...pedido, prod]);
        toast.success("Agregando al pedido", {
          autoClose: 1000,
          theme: "dark",
          pauseOnHover: false,
        });
      }
    } catch (error) {
      console.log(error);
    }

    setModal(false);
  };

  const handleEditarCantidades = (id) => {
    const productoActualizar = pedido.find((p) => p.id == id);
    setProducto(productoActualizar);
    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    try {
      const pedidoActualizado = pedido.filter(
        (pedidoState) => pedidoState.id !== id
      );
      setPedido(pedidoActualizado);
      toast.error("Eliminado correctamente", {
        autoClose: 1000,
        theme: "dark",
        pauseOnHover: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submitPedido = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/ordenes", {
        pedido,
        total,
        nombre,
        fecha: Date.now().toString(),
      });

      // Mensaje al usuario
      toast.success("Pedido realizado correctamente", {
        autoClose: 1000,
        theme: "dark",
      });
      setTimeout(() => {
        // Formatear pedido
        setCategoriaActual(categorias[0]);
        setProducto({});
        setPedido([]);
        setNombre("");
        setTotal(0);
        // Mandar al usuario a la pagina principal
        router.push("/");
      }, 2000);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log("Enviar");
  };

  // Usefeccts
  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  useEffect(() => {
    const totalPagar = pedido.reduce(
      (total, item) => (total += item.cantidad * item.precio),
      0
    );
    setTotal(totalPagar);
  }, [pedido]);

  return (
    <ReciclajeContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleClickProducto,
        modal,
        handleChangeModal,
        pedido,
        handleAgregarPedido,
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
        submitPedido,
        total,
      }}
    >
      {children}
    </ReciclajeContext.Provider>
  );
};

export { ReciclajeProvider };

export default ReciclajeContext;
