import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import logo from "./logo.svg";
import "./App.css";  
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{t("title")}</h1>
          <div>{i18n.language}</div>
        </header>
        <div className="App-intro">
          <div><Trans i18nKey="App.title" >Default title</Trans></div>
          <div>{t("App.subtitle")}</div>
          <div>
            <div>
              <button onClick={() => i18n.changeLanguage("es")}>ES</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
