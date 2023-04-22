import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Ordenes Pendientes", url: "/admin" },
  { paso: 2, nombre: "Ordenes Completadas", url: "/admin/completados" }
];

const PasosAdmin = () => {
  const router = useRouter();

  const calcularProgreso = () => {
    let progreso;
    if (router.pathname == "/admin") {
      progreso = 50;
    } else if (router.pathname == "/admin/completados") {
      progreso = 100;
    } 
    return progreso;
  };
  
  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            key={paso.paso}
            type="button"
            className="text-xl font-bold uppercase"
            onClick={() => {
              router.push(paso.url);
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-200 mb-10 rounded-full">
        <div
          className={`rounded-full bg-green-500 text-sm leading-none h-2 text-center 
          `}
          style={{width: `${calcularProgreso()}%`}}
        ></div>
      </div>
    </>
  );
};

export default PasosAdmin;
