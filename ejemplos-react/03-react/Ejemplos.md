#Ejemplos de conceptos fundamentales de React

> Para ejecutar cualquier ejemplo: `cd <ejemplo> && npm install && npm start`.

---

## Resumen de contenidos

| Apartado | Bloque | Ejemplos | Concepto central |
|---|---|---|---|
| 1 | Primeros pasos | `01-react-hello-world`, `02-react-hello-world-class` | Estructura de un proyecto y qué es un componente |
| 2 | JSX | `03-jsx-javascript`, `04-jsx-events`, `05-react-fragments` | Mezclar JavaScript y marcado, manejar eventos y usar fragmentos |
| 3 | Componentización | `06-multicomponents`, `07-react-properties`, `08-react-namespaces-deprecated` | Dividir la UI y pasar datos con props |
| 4 | Estilos | `09-react-css`, `10-react-css2` | CSS externo frente a estilos en línea |
| 5 | Estado y ciclo de vida | `11-react-lifecycle`, `12-react-multiple-value-fields` | `useState`, `useEffect` y formularios controlados |
| 6 | Datos compartidos | `13-react-context` | Context API y cómo evitar el *prop drilling* |
| 7 | Navegación | `14-react-router`, `15-react-auth-sample` | SPA con varias rutas, parámetros y redirecciones |
| 8 | Ecosistema | `16-react-material-ui`, `17-react-lang-detect`, `18-react-i18n` | Librerías de UI e internacionalización |
| 9 | Puente a red | `19-react-crud-api` | Backend REST para consumir desde React (se continúa en `06-network`) |

---

## 1. Primeros pasos

### `01-react-hello-world`
**Objetivo:** presentar la estructura de un proyecto React y el primer componente funcional.

- Es la plantilla de CRA sin modificar.
- `public/index.html` contiene el `<div id="root">` donde se monta la aplicación.
- `src/index.js` crea la raíz con `ReactDOM.createRoot(...)` y renderiza `<App />` dentro de `<React.StrictMode>`.
- `src/App.js` es un **componente funcional**, es decir, una función que devuelve JSX.
- También muestra que se pueden importar recursos (`import logo from './logo.svg'`) y CSS (`import './App.css'`) directamente desde JavaScript, y que JSX usa `className` en lugar de `class`.

**Para comentar en clase:** los scripts `start`, `build` y `test` de `package.json`, el *hot reload* y el papel de `StrictMode`.

### `02-react-hello-world-class`
**Objetivo:** mostrar la misma aplicación escrita como **componente de clase**.

- `class App extends Component` con un método `render()` que devuelve el JSX.
- Sirve para comparar las dos sintaxis. Hoy se usan componentes funcionales con hooks, pero en código heredado y en documentación antigua todavía aparecen clases.

---

## 2. JSX

### `03-jsx-javascript`
**Objetivo:** aprender a incrustar expresiones JavaScript dentro de JSX. Es el ejemplo más completo del bloque y conviene recorrer cada archivo por separado.

| Archivo | Qué enseña |
|---|---|
| `Variables.js` | Interpolar variables con `{title}` |
| `Variables2.js` | Guardar fragmentos JSX en variables (`const header = (<header>…</header>)`) y componerlos |
| `Loops.js` | Renderizar listas con `array.map()` y la prop obligatoria `key` |
| `Comments.js` | Comentarios en JSX: `{/* … */}` entre elementos y `/* … */` dentro de la etiqueta |
| `App.js` | Lo reúne todo: listas, **renderizado condicional** con ternario (`showTitle ? … : …`), clases condicionales (`className={applyCss ? "App-intro" : ""}`), un `onClick` en línea y un `console.log` dentro del JSX |
| `AppClassComponent.js` | Recordatorio de la versión con clase |

**Para comentar en clase:** `Variables2` y `AppClassComponent` no se importan en `App.js`. Un buen ejercicio es pedir a los alumnos que los añadan.

### `04-jsx-events`
**Objetivo:** manejar eventos del DOM en React.

- Enseña tres formas de asignar un *handler*: una arrow function en línea (`onClick={() => alert(...)}`), la referencia a una función declarada como constante (`onClick={arrowHandleClick}`) y una función que recibe el evento (`onClick={(e) => handleClick(e)}`).
- Usa `e.preventDefault()` para evitar la navegación de un `<a href="#">`.
- Introduce el *SyntheticEvent* de React y la convención camelCase (`onClick` en lugar de `onclick`).

**Para comentar en clase:** la diferencia entre `onClick={fn}` y `onClick={fn()}`. La segunda forma ejecuta la función durante el render; es un error típico de principiante.

### `05-react-fragments`
**Objetivo:** devolver varios elementos sin añadir un nodo contenedor al DOM.

- `Paragraphs.js` usa `<React.Fragment>` y recibe un array por props que recorre con `map`.
- `AnotherParagraph.js` usa la sintaxis corta `<>…</>`.
- `result.html` muestra el HTML resultante, en el que no aparecen `div` sobrantes.

**Para comentar en clase:** el `map` de `Paragraphs.js` no pone `key`, así que la consola mostrará un aviso. Sirve para repasar lo visto en `Loops.js`. También conviene explicar que la sintaxis larga `<React.Fragment key=…>` es la única que admite `key`.

---

## 3. Componentización y props

### `06-multicomponents`
**Objetivo:** dividir un componente monolítico en componentes reutilizables.

- `App.nonmulti.js` es la versión "antes": todo el código en un solo componente.
- `App.js`, `Header.js` y `Paragraph.js` son la versión "después".
- Enseña varias cosas sobre props:
  - pasar datos (`<Header logo={logo} />`);
  - desestructurar en la firma (`function Header({ logo, title = "Welcome to React" })`);
  - dar **valores por defecto** a las props;
  - pasar una **función como prop** (`shMsg={showMsg}`) para que el hijo se comunique con el padre.

**Para comentar en clase:** conviene poner `App.nonmulti.js` y `App.js` lado a lado. Es la base del flujo de datos unidireccional: los datos bajan y los eventos suben.

### `07-react-properties`
**Objetivo:** tipar y validar props con `prop-types` y usar valores por defecto.

- `App` recibe `title`, `text`, `version`, `technologies` y `fun`, cada una con un valor por defecto.
- `App.propTypes` declara el tipo de cada prop y la marca como `isRequired`.

**Para comentar en clase:**
- `index.js` renderiza `<App />` **sin props**, por lo que en desarrollo aparecen avisos de PropTypes. Esto permite enseñar la diferencia entre "valor por defecto" y "prop requerida".
- `prop-types` quedó obsoleto en React 19; hoy la validación se hace con **TypeScript** (bloque `12-typescript`).

### `08-react-namespaces-deprecated` ⚠️
**Objetivo:** ejemplo **histórico** de componentes con espacio de nombres (`<Page.Header />`, `<Page.Paragraph />`) y de `props.children`.

- Usa `React.createClass`, que se **eliminó en React 16**. Con React 18 el proyecto **no funciona**, y el nombre de la carpeta ya lo advierte.
- La idea del patrón sigue siendo válida: agrupar subcomponentes bajo un componente padre (*compound components*) y recibir el contenido anidado con `children`.

**Para comentar en clase:** se puede enseñar en 5 minutos como curiosidad o dejar como ejercicio: reescribirlo con funciones (`function Page({ children })` y `Page.Header = Header`).

---

## 4. Estilos

### `09-react-css`
**Objetivo:** aplicar estilos desde un archivo CSS importado.

- `import './App.css'` con selectores de etiqueta (`h1`), de id (`#supertitle`) y de clase (`.regular`, que se aplica con `className`).
- El CSS importado es **global**: afecta a toda la aplicación, no solo al componente.

### `10-react-css2`
**Objetivo:** reproducir la misma interfaz con **estilos en línea** (`style={objeto}`).

- Los estilos son objetos JavaScript con propiedades en camelCase (`textAlign`, `backgroundColor`, `fontWeight`).
- Es el mismo resultado visual que `09-react-css`, así que se pueden comparar directamente.

**Para comentar en clase:** ventajas e inconvenientes de cada opción. El estilo en línea permite valores dinámicos pero no admite pseudoclases ni media queries. El bloque `04-styles` profundiza en el tema.

---

## 5. Estado y ciclo de vida

### `11-react-lifecycle`
**Objetivo:** entender cuándo se renderiza un componente y cuándo se ejecuta `useEffect`.

- `useState` implementa un contador con botones de incremento y decremento.
- `console.log` al inicio de cada componente permite ver cada render.
- Un `useEffect` **sin array de dependencias** se ejecuta después de **cada** render.
- `Footer` solo se monta cuando `counter < 0`, porque se renderiza de forma condicional con `&&`.
- El `useEffect(..., [counter])` de `Footer` tiene una **función de limpieza** que registra el desmontaje, y se vuelve a ejecutar cada vez que cambia `counter`.
- En `index.js` se quitó `StrictMode` a propósito para que los logs no salgan duplicados.

**Para comentar en clase:** con la consola abierta, enseñar las tres variantes: sin array (cada render), `[]` (solo al montar) y `[counter]` (cuando cambia `counter`). Los comentarios de `App.js` sobre estas variantes son confusos. `useEffect` **no provoca** re-renders; solo decide *cuándo* se ejecuta el efecto.

### `12-react-multiple-value-fields`
**Objetivo:** gestionar formularios con campos de **valores múltiples**.

- El estado es un objeto (`{ possessions: [], studies: [] }`) que se actualiza de forma inmutable con *spread* (`{...state, studies}`).
- `<select multiple>` lee `event.target.selectedOptions`.
- Los checkboxes son **controlados**: `checked={inArray(...)}` y usan un `Set` para añadir o quitar valores.
- Se usa `htmlFor` en lugar de `for`.

**Para comentar en clase:** `handleSubmit` no llama a `e.preventDefault()`, así que al enviar el formulario la página se recarga. Es un buen error para detectarlo en vivo. El `<select>` no es controlado porque le falta `value`; se puede proponer como ejercicio.

---

## 6. Datos compartidos

### `13-react-context`
**Objetivo:** compartir datos globales sin pasarlos por props a nivel.

- `OurContext.js` crea el contexto con `React.createContext(defaultValues)`.
- `App.js` envuelve a sus hijos con `<OurContext.Provider value={...}>`.
- `Header.js` y `Footer.js` leen el valor con `useContext(OurContext)` y lo usan para mostrar un título y un color.

**Para comentar en clase:** primero conviene explicar el problema del *prop drilling* y luego la solución. Una ampliación natural es guardar el valor en un `useState` para poder cambiar el tema desde un botón. Esto prepara el bloque `05-state`.

---

## 7. Navegación (React Router v6)

### `14-react-router`
**Objetivo:** construir una SPA con varias "páginas".

- `<BrowserRouter>` en `index.js`; `<Routes>` y `<Route>` en `App.js`.
- **Rutas anidadas** con un layout común (`Navigation.js` con `<Outlet />`).
- `<Link to="...">` para navegar sin recargar la página.
- **Parámetros de ruta**: `/category/:category` y `/sample/:id/:name`, leídos con `useParams()`.
- **Navegación programática** con `useNavigate()`: `Category` y `Sample` redirigen a `/` si reciben un valor inválido.
- Ruta comodín `*` que lleva a `NotFound`.

**Para comentar en clase:** el atributo `exact` es de React Router v5; en v6 no hace nada y se puede quitar. `Default.js` incluye enlaces preparados para probar cada caso.

### `15-react-auth-sample`
**Objetivo:** introducir la idea de rutas protegidas y de login.

- Usa la API moderna `createBrowserRouter` y `<RouterProvider>` con las rutas definidas como objetos.
- `Login.js` lee los inputs con **`useRef`** (formulario *no controlado*) y redirige con `navigate` si el login es correcto.
- `Auth.js` es una clase de autenticación simulada: solo acepta el usuario `falken`.

**Para comentar en clase:** el ejemplo está **incompleto**, lo que lo convierte en un buen ejercicio guiado.
- `/protected` y `/admin` **no están protegidas**: falta un componente guardián que compruebe la sesión y redirija con `<Navigate to="/login" />`.
- La instancia de `Auth` se crea dentro de `Login` y se pierde al navegar. Habría que guardarla en un Context (enlaza con el 6).
- No hay ruta `*`: el 404 solo existe en `/404`.
- Los tests usan `ReactDOM.render`, una API antigua, y no envuelven los componentes en un router, así que fallan.

---

## 8. Ecosistema y librerías

### `16-react-material-ui`
**Objetivo:** usar una librería de componentes (MUI v5).

- Usa `Tabs`, `Tab`, `Box` (con la prop `sx` para estilos), `TextField`, `Button` e iconos de `@mui/icons-material`.
- Muestra contenido condicional según la pestaña activa, guardada en un `useState`.

**Para comentar en clase:** hay un error intencionado o accidental. `<Tabs value={3}>` está fijado a mano, así que la pestaña no se marca como seleccionada. Debería ser `value={visibleTab}`. Es un buen ejemplo para explicar componentes controlados.

### `17-react-lang-detect`
**Objetivo:** usar una dependencia externa sencilla para detectar el idioma del navegador.

- `detect-browser-language` equivale en la práctica a `navigator.language`.
- Es un paso previo a la internacionalización completa.

### `18-react-i18n`
**Objetivo:** internacionalizar una aplicación con **i18next** y **react-i18next**.

- `i18n.js` configura i18next con tres plugins:
  - `i18next-http-backend` carga `public/locales/{lang}/translation.json`;
  - `LanguageDetector` detecta el idioma;
  - `fallbackLng: "en"` fija el idioma de reserva.
- El hook `useTranslation()` devuelve `t("clave")` para traducir e `i18n.changeLanguage("es")` para cambiar de idioma.
- También usa el componente `<Trans>` y claves anidadas (`App.title`).

**Para comentar en clase:** la dependencia `i18n` de `package.json` sobra y se puede quitar.

---

## 9. Puente hacia la comunicación con APIs

### `19-react-crud-api`
**Objetivo:** ofrecer un **backend REST** (Express) de notas para practicar peticiones HTTP desde React.

- El frontend (`src/App.js`) es todavía la plantilla de CRA, así que **no consume la API**.
- `src/server/` expone los endpoints `GET /notes`, `GET /notes/:id`, `POST /notes`, `PUT /notes/:id` y `DELETE /notes/:id` en el puerto 3001, con los datos en memoria (`notes.js`).

**Para comentar en clase:** tiene sentido usarlo como enunciado de práctica: hacer un listado de notas con `fetch` dentro de `useEffect`, y después añadir alta, edición y borrado. Continúa en `06-network`. El servidor tiene algunos fallos menores:
- la ruta `POST /notes/:id` llama a `notes.vote`, que no existe;
- `origin` usa `exports.port`, que es `undefined`;
- `clone` se importa pero no se usa.

---

## Propuesta de secuencia en clase

| Sesión | Contenido | Ejemplos | Actividad sugerida |
|---|---|---|---|
| 1 | Qué es React; crear y ejecutar un proyecto | `01-react-hello-world`, `02-react-hello-world-class` | Modificar `App.js` y observar el *hot reload* |
| 2 | JSX a fondo | `03-jsx-javascript`, `04-jsx-events`, `05-react-fragments` | Renderizar una lista propia con condicionales y eventos |
| 3 | Componentes y props | `06-multicomponents`, `07-react-properties` (+ `08-react-namespaces-deprecated` como historia) | Dividir una página estática en componentes |
| 4 | Estilos | `09-react-css`, `10-react-css2` | Aplicar estilos a la práctica anterior de las dos formas |
| 5 | Estado, efectos y formularios | `11-react-lifecycle`, `12-react-multiple-value-fields` | Contador con la consola abierta; corregir el `preventDefault` |
| 6 | Context | `13-react-context` | Añadir un conmutador de tema claro/oscuro |
| 7 | Routing | `14-react-router`, `15-react-auth-sample` | Completar las rutas protegidas del ejemplo de auth |
| 8 | Ecosistema | `16-react-material-ui`, `17-react-lang-detect`, `18-react-i18n` | Traducir la práctica a dos idiomas |
| 9 | Enlace con APIs | `19-react-crud-api` | Arrancar el servidor y listar las notas con `fetch` |

### Errores y detalles que conviene aprovechar en clase
Estos problemas del código sirven como material didáctico:

1. Falta `key` en `05-react-fragments/src/Paragraphs.js`.
2. Falta `preventDefault` en `12-react-multiple-value-fields`.
3. `value={3}` está fijado a mano en `16-react-material-ui/src/App.js`.
4. `React.createClass` ya no existe (`08-react-namespaces-deprecated`).
5. Las rutas de `15-react-auth-sample` no están realmente protegidas.
6. En `14-react-router` se usa `exact`, que en v6 no tiene efecto.
7. Los comentarios de `11-react-lifecycle/src/App.js` sobre las dependencias de `useEffect` son confusos.
