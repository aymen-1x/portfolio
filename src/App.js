import React, { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/nav";
import Accueil from "./component/accueil";
import Info from "./component/apropos";
import Projets from "./component/projets";
import Contact from "./component/contact";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div className="text-center py-5">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Info />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
