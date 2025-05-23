import React, { useState } from "react";
import PesquisaAtleta from "./adapters/PesquisaAtleta";
import PainelFavoritos from "./components/PainelFavoritos";

export default function App() {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (atleta) => {
    if (!favoritos.find((f) => f.id === atleta.id)) {
      setFavoritos([...favoritos, atleta]);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pesquisa de Atletas</h1>
      <PesquisaAtleta adicionarFavorito={adicionarFavorito} />
      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
}
