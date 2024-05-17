import "@/styles/globals.css";
import Layout from "@/component/Layout";
import Home from ".";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
