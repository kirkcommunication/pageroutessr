import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PageLoader from "../components/PageLoader";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className=" bg-white">
  <PageLoader/>
  <Header/>
  <Component {...pageProps} />;
  </main>
  )
}
