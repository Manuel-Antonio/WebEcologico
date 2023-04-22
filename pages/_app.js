import "@/styles/globals.css";
import { ReciclajeProvider } from "@/context/ReciclajeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ReciclajeProvider>
      <Component {...pageProps} />
    </ReciclajeProvider>
  );
}
