import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Le nom est requis";
    if (!form.email.trim()) err.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Email invalide";
    if (!form.subject.trim()) err.subject = "Le sujet est requis";
    if (!form.message.trim()) err.message = "Le message est requis";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    // Remplacez par appel API réel si besoin
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact</h2>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 700 }}>
          {submitted && (
            <div className="alert alert-success" role="alert">
              Message envoyé avec succès ! Je vous répondrai bientôt.
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Nom complet</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Votre nom"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="votre.email@example.com"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Sujet</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
              placeholder="Sujet"
            />
            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              rows="5"
              placeholder="Votre message..."
            />
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;