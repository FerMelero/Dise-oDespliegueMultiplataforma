import React from 'react';
import './EventPlanner.css';
import Footer from './Footer';'./Footer';

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      <header>
        <h1>Bienvenido a Event Planner</h1>
      </header>

      <section className="description">
        <p>
          Planifica y organiza tus eventos sin esfuerzo con Event Planner. Desde fiestas de
          cumpleaños hasta reuniones corporativas, te tenemos cubierto.
        </p>
        <button className="get-started-button">Comenzar</button>
      </section>

      <section className="events_categories">
        <div>
          <h2>Eventos Sociales:</h2>
          <ul>
            <li>Fiestas de cumpleaños</li>
            <li>Celebraciones de aniversario</li>
            <li>Recepciones de boda</li>
            <li>Baby showers</li>
            <li>Fiestas de graduación</li>
            <li>Reuniones familiares</li>
          </ul>
        </div>
        <div>
          <h2>Eventos de Entretenimiento:</h2>
          <ul>
            <li>Conciertos</li>
            <li>Festivales de música</li>
            <li>Proyecciones de cine</li>
            <li>Espectáculos de comedia</li>
            <li>Exposiciones de arte</li>
            <li>Eventos culturales</li>
          </ul>
        </div>
        <div>
          <h2>Eventos Comunitarios:</h2>
          <ul>
            <li>Eventos de recaudación de fondos</li>
            <li>Galas benéficas</li>
            <li>Campañas de voluntariado</li>
            <li>Fiestas de barrio</li>
            <li>Festivales comunitarios</li>
            <li>Celebraciones culturales</li>
          </ul>
        </div>
      </section>

      <section className="events-features">
        <h2>Características</h2>
        <ul>
          <li>Creación y gestión de eventos sencilla</li>
          <li>Plantillas de eventos personalizables</li>
          <li>Gestión de lista de invitados</li>
          <li>Colaboración en tiempo real</li>
          <li>Recordatorios y notificaciones</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonios</h2>
        <div className="testimonial">
          <p>"Event Planner hizo que organizar mi boda fuera pan comido. ¡Muy recomendable!"</p>
          <p className="author">- Emily Johnson</p>
        </div>
        <div className="testimonial">
          <p>"Este es el trabajo de la práctica guiada 2"</p>
          <p className="author">- Fernando Melero</p>
        </div>
      </section>

      <section className="contact">
        <form>{/* Campo de entrada para el nombre */}<input type="text" placeholder="Nombre" />{/* Campo de entrada para el correo electrónico */}<input type="email" placeholder="Correo Electrónico" />{/* Área de texto para el mensaje */}<textarea placeholder="Mensaje"></textarea>{/* Botón de enviar */}<button className="submit-button">Enviar</button></form>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default EventPlanner;