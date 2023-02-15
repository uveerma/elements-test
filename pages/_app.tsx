import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
          <Toaster />
          <Component {...pageProps} />
    </ChakraProvider>
  );
}
