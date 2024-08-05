import React from "react";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contacto</h2>
    <form>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Mensaje:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  </section>
);

export default Contact;
