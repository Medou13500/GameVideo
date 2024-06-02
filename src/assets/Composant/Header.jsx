import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu
  const menuRef = useRef(null); // Référence au menu pour détecter les clics à l'extérieur

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Fonction pour basculer l'état du menu (ouvert/fermé)
  };

  const handleClickOutside = (event) => {
    // Si le clic est en dehors du menu, fermer le menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Ajouter l'événement de clic si le menu est ouvert
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Supprimer l'événement de clic si le menu est fermé
      document.removeEventListener('mousedown', handleClickOutside);
    }
    // Nettoyer l'événement de clic lors du démontage du composant ou du changement d'état
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-customBlue shadow-md z-10 bg-blue-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl sm:text-3xl font-thin text-gray-900">BitBattle</h1>
          <div className="flex items-center space-x-4">
            {/* Bouton burger pour les petits écrans */}
            <div className="block sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-900 hover:text-white focus:outline-none focus:text-white bg-blue-500 p-2 rounded"
              >
                {/* Icône du bouton burger (ouverture/fermeture) */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
            {/* Liste des liens de navigation */}
            <ul
              ref={menuRef}
              className={`flex-col sm:flex sm:flex-row sm:space-x-4 fixed top-0 left-0 w-full bg-blue-500 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
              } sm:static sm:translate-y-0 sm:bg-transparent sm:flex-row sm:space-x-4`}
            >
              {/* Lien Accueil */}
              <li className="mt-16 sm:mt-0">
                <Link to="/Accueil" className="text-gray-900 hover:text-white font-thin block px-3 py-2 rounded-md">
                  Accueil
                </Link>
              </li>
              {/* Lien Playstation */}
              <li className="mt-2 sm:mt-0">
                <Link to="/Playstation" className="text-gray-900 hover:text-white font-thin block px-3 py-2 rounded-md">
                  Playstation
                </Link>
              </li>
              {/* Lien Xbox */}
              <li className="mt-2 sm:mt-0">
                <Link to="/Xbox" className="text-gray-900 hover:text-white font-thin block px-3 py-2 rounded-md">
                  Xbox
                </Link>
              </li>
              {/* Lien Switch */}
              <li className="mt-2 sm:mt-0">
                <Link to="/Switch" className="text-gray-900 hover:text-white font-thin block px-3 py-2 rounded-md">
                  Switch
                </Link>
              </li>
              {/* Lien Contacter-nous */}
              <li className="mt-2 sm:mt-0 mb-10 sm:mb-0">
                <Link to="/Formulaire" className="text-gray-900 hover:text-white font-thin block px-3 py-2 rounded-md">
                  Contacter-nous
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
