export default function Header ({ logo , title= "Welcome to React"}) {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
    );
}
