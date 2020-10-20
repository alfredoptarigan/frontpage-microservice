import Router from "next/router";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";
import "nprogress/nprogress.css";
import "../../tailwindcss/style.css";
import "react-toastify/dist/ReactToastify.css";

NProgress.configure({
  showSpinner: false,
});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-center"></ToastContainer>
    </>
  );
}

export default MyApp;
