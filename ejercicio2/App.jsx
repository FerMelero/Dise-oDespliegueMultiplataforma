
// Ejercicio 1 · Tarjeta de Perfil

// Completa las partes marcadas con TODO.

// No hace falta instalar nada: abre index.html en el navegador para ver los cambios.

// TODO 1: Completa el componente InterestTag.

// Recibe una prop "label" (un texto) y debe pintar un <span> con la clase "tag"

// mostrando ese texto.

function InterestTag({ label }) {

  return (

    <span className="tag">{label}</span>

  );

}

// TODO 2: Completa el componente ProfileCard.

// Recibe estas props: photo, name, interests (un array de strings) y description.

// Debe pintar:

//   - una imagen con la foto (usa la prop "photo" como src)

//   - el nombre

//   - la lista de intereses, usando InterestTag para cada uno (¡no olvides la key!)

//   - la descripción

function ProfileCard({ photo, name, interests, description }) {

  return (

    <div className="card">

      <img src={photo} alt={name} />

      <h2>{name}</h2>

      <div className="tags">

        {interests.map((interest) => (
          <InterestTag key={interest} label={interest} />
        ))}

      </div>

      <p>{description}</p>

    </div>

  );

}

// App ya está listo: crea al menos DOS tarjetas con datos distintos

// para comprobar que tu ProfileCard es reutilizable.

function App() {

  return (

    <div className="gallery">

      <ProfileCard

        photo="foto-ejemplo.png"

        name="Nombre Apellido"

        interests={["Fotografía", "Ajedrez", "Senderismo"]}

        description="Estudiante de ingeniería."

      />

      <ProfileCard

        photo="foto-ejemplo.png"

        name="Fernando Melero"

        interests={["Programación", "Docker", "Ciberseguridad"]}

        description="Estudiante de ingeniería informática interesado en el desarrollo y datos y seguridad."

      />

    </div>

  );

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

