import React, { useState, useEffect } from 'react';
import PlaystationGame from './PlaystationGame.json';  // Assurez-vous que le chemin d'accès est correct

function AffichageDonnee() {
  const [allJson, setJson] = useState([]);  // État pour stocker tous les jeux
  const [searchTerm, setSearchTerm] = useState('');  // État pour le terme de recherche
  const [consoleType, setConsoleType] = useState('');  // État pour le type de console

  useEffect(() => {
    setJson(PlaystationGame);  // Charger les données dès que le composant est monté
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);  // Mettre à jour searchTerm à chaque modification de l'input
  };

  const handleConsoleFilter = (consoleSelected) => {
    setConsoleType(consoleSelected);  // Fonction pour mettre à jour consoleType quand un bouton console est cliqué
  };

  const clearFilter = () => {
    setConsoleType('');  // Effacer le filtre de console
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const filteredGames = allJson.filter(game =>
    game.Titre.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (consoleType === '' || game.console === consoleType)  // Filtrer selon la console si spécifié
  );

  return (
    <div className="flex flex-col items-center justify-center mt-6 px-4">
      <form onSubmit={handleSubmit} className="w-full sm:w-2/3">
        <input
          type="text"
          placeholder="Rechercher un jeu"
          value={searchTerm}
          onChange={handleChange}
          className="w-full p-4 bg-gray-200 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
      </form>
      <div className="mb-4 flex space-x-2 ">
        <button 
          className={`bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full ${consoleType === 'PS4' ? 'opacity-50' : ''}`}
          onClick={() => handleConsoleFilter('PS4')}
        >
          PS4
        </button>
        <button 
          className={`bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full ${consoleType === 'PS5' ? 'opacity-50' : ''}`}
          onClick={() => handleConsoleFilter('PS5')}
        >
          PS5
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full"
          onClick={clearFilter}
        >
          ToutConsole
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {filteredGames.map((game) => (
          <div key={game.id} className="max-w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={game.image} alt={game.Titre} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h1 className="text-lg font-bold mb-2">{game.Titre}</h1>
              <p className="text-gray-700 mb-2">Date de sortie: {game.date}</p>
              <p className="text-gray-700">Console: {game.console}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AffichageDonnee;
