import Layout from "../components/layout/Layout";
import "../styles/global.css";

export default function GlobalCss({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
