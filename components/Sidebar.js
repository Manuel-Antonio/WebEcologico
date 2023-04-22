import Image from "next/image";
import useReciclaje from "@/hooks/useReciclaje";
import Categoria from "./Categoria";
import { useRouter } from "next/router";
const Sidebar = () => {
  const { categorias } = useReciclaje();
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push("/admin");
        }}
      >
        <Image
          width={300}
          height={200}
          src={
            "https://res.cloudinary.com/djsl4a5py/image/upload/v1682191237/BioApp/Logo/logo2_nfqjrg.png"
          }
          alt={"Logo"}
          className="w-full block"
        />
      </button>
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
