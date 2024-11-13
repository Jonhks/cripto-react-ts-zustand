import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCriptoStore } from "./store";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

const App = () => {
  const fetchCryptos = useCriptoStore((store) => store.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  );
};

export default App;
