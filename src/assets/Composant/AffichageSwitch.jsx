import React, { useEffect, useState } from "react";
import SwitchGame from './SwitchGame.json'; // Assurez-vous que le chemin est correct
import Accueil from "./Accueil";
function AffichageSwitch() {
    const [allSwitch, setAllSwitch] = useState([]);
    const [searchSwitch, setSearchSwitch] = useState("");
    const [consoleSwitchType, setConsoleSwitchType] = useState("");

    useEffect(() => {
        setAllSwitch(SwitchGame);
    }, []);  // Utiliser un tableau de dépendances vide

    const handleSearchChange = (event) => {
        setSearchSwitch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const filteredGamesSwitch = allSwitch.filter(switchC =>
        switchC.Titre.toLowerCase().includes(searchSwitch.toLowerCase()) 
        && (consoleSwitchType === '' || switchC.console === consoleSwitchType)
    );

    return (
        <div className="flex flex-col items-center justify-center mt-12">
            <form onSubmit={handleSubmit} className="w-2/3">
                <input
                    type="text"
                    placeholder="Recherche de jeu"
                    value={searchSwitch}
                    onChange={handleSearchChange}
                    className="w-full p-4 bg-gray-200 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                />
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGamesSwitch.map((switchGame) => (
                    <div key={switchGame.id} className="max-w-xs border border-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col">
                        <img src={switchGame.image} alt={switchGame.Titre} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h1 className="text-xl font-bold mb-2">{switchGame.Titre}</h1>
                            <p className="text-gray-700 mb-2">Date de sortie: {switchGame.date_de_sortie}</p>
                            <p className="text-gray-700">Console: {switchGame.console}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AffichageSwitch;
