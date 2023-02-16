import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CheckoutProvider } from "@candypay/elements";
import { AppProps } from "next/app";
import("@solana/wallet-adapter-react-ui/styles.css" as any); 
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Toaster />
      <CheckoutProvider
      publicApiKey={process.env[`NEXT_PUBLIC_CP_API`] as string}
    >
      <Component {...pageProps} />
    </CheckoutProvider>
    </ChakraProvider>
  );
}
