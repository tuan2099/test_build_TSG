import { Provider } from "react-redux";
import ErrorBoundary from "../components/Common/ErrorBoundaries";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  );
}

export default MyApp;
