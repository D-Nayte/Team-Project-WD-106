import Layout from "../components/layout/Layout";
import "../styles/global.css";
import StoreComponent from "../context/Store.jsx";

export default function GlobalCss({ Component, pageProps }) {
  return (
    <StoreComponent>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreComponent>
  );
}
