import "antd/dist/antd.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="modal-container" />
    </>
  );
}

export default MyApp;
