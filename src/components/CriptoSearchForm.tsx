import { useState, ChangeEvent, FormEvent } from "react";
import { currencies } from "../data";
import { useCriptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

const CriptoSearchForm = () => {
  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptoCurrency: "",
  });
  const cryptoCurrencies = useCriptoStore((store) => store.cryptoCurrencies);
  const fetchData = useCriptoStore((store) => store.fetchData);

  const [error, setError] = useState("");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    // ? Consulta api
    fetchData(pair);
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">--Selecciona--</option>
          {currencies.map((currency) => (
            <option
              value={currency.code}
              key={currency.code}
            >
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptoCurrency">Criptomoneda:</label>
        <select
          name="criptoCurrency"
          id="criptoCurrency"
          onChange={handleChange}
          value={pair.criptoCurrency}
        >
          <option value="">--Selecciona--</option>
          {cryptoCurrencies.map((crypto) => (
            <option
              value={crypto.CoinInfo.Name}
              key={crypto.CoinInfo.Name}
            >
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <input
        type="submit"
        value={"cotizar"}
      />
    </form>
  );
};

export default CriptoSearchForm;
