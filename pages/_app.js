import "../styles/globals.css";
import "../components/Component1.scss";
import "../components/Component2.scss";
import "../components/Component3.scss";
import "../components/Component4.scss";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
