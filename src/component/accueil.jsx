// ...existing code...
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TypeAnimation } from 'react-type-animation';
import linkedinImg from '../assetss/img-linkdin.png'; // Vérifie le chemin exact
import { Link } from "react-router-dom";

const Accueil = () => {
  return (
    <section id="accueil" className="section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Texte - gauche sur md+ */}
          <div className="col-12 col-md-6 order-2 order-md-1">
            <h6 className="h6 text-accent mb-2">Accueil</h6>

            <h1 className="mb-2 fw-bold">
              Hi 👋 I’m <span className="text-accent">AYMEN ABDESSAMI</span>
            </h1>

            <h2 className="h5 text-muted mb-3">
              Développeur full‑stack — interfaces modernes & performantes
            </h2>

            <p className="lead text-muted mb-4">
              Je conçois des applications web rapides, accessibles et agréables à utiliser.
              J'allie design réfléchi et code propre pour transformer des idées en produits réels.
            </p>

            <div className="mb-4">
              <TypeAnimation
                sequence={[
                  'React • Node.js • TypeScript',
                  1200,
                  'Design systems • Responsive • Performance',
                  1200,
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '1.05rem', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>

            <div className="d-flex gap-3">
              <Link to="/projets" className="btn-accent">
                Voir mes projets
              </Link>
             
              <Link to="/contact" className="btn btn-outline-primary" aria-label="Contacter">
               Contact
              </Link>
            </div>
          </div>

          {/* Image - droite sur md+ */}
          <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
            <img
              src={linkedinImg}
              alt="Photo de Aymen Abdessami"
              className="img-fluid img-rounded"
              style={{
                maxWidth: 320,
                width: "100%",
                height: 340,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
// ...existing code...


