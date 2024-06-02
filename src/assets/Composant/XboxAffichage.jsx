import React, { useEffect, useState } from "react";
import XboxGame from './XboxGame.json';

function XboxAffichage() {
    const [allJsonXbox, setJsonXbox] = useState([]); // Corrigé pour initialiser comme un tableau
    const [searchTerm, setSearch] = useState(''); // Corrigé le nom de la fonction pour respecter la convention
    const [consoleType, setConsoleJson] = useState(''); // Corrigé le nom de la fonction pour respecter la convention

    useEffect(() => {
        setJsonXbox(XboxGame);  // Charger les données dès que le composant est monté
    }, []);

    const handleChange = (event) => {
        setSearch(event.target.value); // Corrigé pour utiliser le bon nom de fonction
    };

    const handleConsoleFilter = (consoleSelected) => {
        setConsoleJson(consoleSelected); // Corrigé pour utiliser le bon nom de fonction
    };

    const clearFilter = () => {
        setConsoleJson(''); // Corrigé pour utiliser le bon nom de fonction
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const filteredGames = allJsonXbox.filter(game =>
        game.Titre.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (consoleType === '' || game.console === consoleType) // Corrigé pour utiliser le bon nom de variable
    );

    return (
        <div className="flex flex-col items-center justify-center mt-12">
            <form onSubmit={handleSubmit} className="w-full flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Rechercher un jeu"
                    value={searchTerm}
                    onChange={handleChange}
                    className="w-2/3 p-4 bg-gray-200 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </form>
            <div className="mb-6 flex space-x-4">
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full ${consoleType === 'XboxOne' ? 'opacity-50' : ''}`}
                    onClick={() => handleConsoleFilter('XboxOne')}
                >
                    XboxOne
                </button>
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full ${consoleType === 'Xbox360' ? 'opacity-50' : ''}`}
                    onClick={() => handleConsoleFilter('Xbox360')}
                >
                    Xbox360
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                    onClick={clearFilter}
                >
                    Toutes Consoles
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                    <div key={game.id} className="w-80 h-80 border border-gray-300 rounded-lg overflow-hidden shadow-lg m-4 flex flex-col">
                        <img src={game.image} alt={game.Titre} className="w-full h-48 object-cover" />
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h1 className="text-xl font-bold mb-2">{game.Titre}</h1>
                            <p className="text-gray-700 mb-2">Date de sortie: {game.date}</p>
                            <p className="text-gray-700">Console: {game.console}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default XboxAffichage;
