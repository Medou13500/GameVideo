import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './assets/Composant/Layout';
import Formulaire from './assets/Composant/Formulaire';
import Playstation from './assets/Composant/Playstation';
import Carrouselle from './assets/Composant/Carrouselle';
import Accueil from './assets/Composant/Accueil';
import AffichageDonnee from './assets/Composant/affichageJsonPlay';
import AffichageSwitch from './assets/Composant/AffichageSwitch';
import XboxAffichage from './assets/Composant/XboxAffichage';
import XboxDonnee from './assets/Composant/Xbox';




function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Carrouselle />}  />
      <Route path="Accueil" element={<Accueil />} />
      <Route path="Playstation" element={<Playstation />} />
      <Route path="Formulaire" element={<Formulaire />} />
      <Route path="affichagePlaystation" element={<AffichageDonnee />} />
      <Route path="affichageSwitch" element={<AffichageSwitch />} />
      <Route path="XboxAffichage" element={<XboxAffichage/>} />
      <Route path="Xbox" element={<XboxDonnee/>}/>
      <Route path="Switch" element={<AffichageSwitch/>}/>
    </Route>
    </Routes>
  );
}

export default App;
