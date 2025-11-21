// ...existing code...
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Info = () => {
  const items = [
    { title: "🌐 Web Developer", text: "I design and develop modern, responsive, and scalable web applications that deliver seamless user experiences." },
    { title: "📱 Mobile Applications", text: "Creating intuitive and cross-platform mobile apps that bring ideas to life on both Android and iOS." },
    { title: "🎨 UX / UI Designer", text: "Designing intuitive, modern interfaces focused on user experience, accessibility, and interaction flow." },
    { title: "💻 Front-end", text: "Crafting elegant interfaces using React, Bootstrap, Tailwind, and modern front-end ecosystems." },
    { title: "⚙️ Back-end", text: "Building secure and scalable APIs and managing databases with clean architecture and performance in mind." },
    { title: "🚀 Full-Stack Developer", text: "Integrating front-end and back-end ecosystems to build complete, production-ready solutions from A to Z." },
  ];

  return (
    <section className="py-4">
      <div className="container my-5">
        {/* row-cols: 1 on xs, 2 on sm, 3 on md+ */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 p-3">
          {items.map((it, idx) => (
            <div key={idx} className="col">
              <div className="card h-100 shadow-sm border-0 rounded-3 hover-shadow d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold fs-5">{it.title}</h5>
                  <p className="card-text fs-6 text-secondary flex-grow-1">{it.text}</p>
                  <div className="mt-3">
                    <a href="#contact" className="btn btn-sm btn-outline-primary">En savoir plus</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .hover-shadow {
            transition: transform .28s ease, box-shadow .28s ease;
          }
          .hover-shadow:hover {
            transform: translateY(-6px);
            box-shadow: 0 .9rem 1.4rem rgba(2,6,23,0.08);
          }
          @media (max-width: 420px) {
            .card .card-body { padding: 1rem; }
            .card-title { font-size: 1rem; }
            .card-text { font-size: 0.92rem; }
          }
        `}
      </style>
    </section>
  );
};

export default Info;
// ...existing code...