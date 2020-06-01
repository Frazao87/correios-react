import React, { useState } from "react";
import "./App.css";
import api from "./services/api";

function App() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");

  async function BuscarCEP() {
    const response = await api.get(`${cep}/json`);
    const result = response.data;
    setLogradouro(result.logradouro);
    setBairro(result.bairro);
    setLocalidade(result.localidade);
    setUf(result.uf);
  }
  return (
    <>
      <div className="container row">
        <div className="input-group col-lg-12">
          <input
            className="form-control"
            type="text"
            placeholder="Digite o CEP que deseja buscar..."
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={() => BuscarCEP()}>
              Buscar
            </button>
          </div>
        </div>
        <div className="col-lg-12">
          <h5>Logradouro: {logradouro}</h5>
          <h5>Bairro: {bairro}</h5>
          <h5>Localidade: {localidade}</h5>
          <h5>UF: {uf}</h5>
        </div>
      </div>
    </>
  );
}

export default App;
