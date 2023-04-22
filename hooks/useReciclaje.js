import {useContext} from "react";
import ReciclajeContext from "@/context/ReciclajeProvider";

const useReciclaje = () => {
  return useContext(ReciclajeContext);
}

export default useReciclaje
