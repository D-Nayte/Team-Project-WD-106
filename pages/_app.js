import "../styles/global.css";
import StoreComponent from "../context/Store.jsx";

export default function GlobalCss({ Component, pageProps }) {
  return (
    <StoreComponent>
      <Component {...pageProps} />
    </StoreComponent>
  );
}
