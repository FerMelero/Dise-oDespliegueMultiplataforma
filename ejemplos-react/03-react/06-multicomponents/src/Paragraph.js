export default function Paragraph ({ shMsg }) {
    return (
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
            <button onClick={() => shMsg("Hello")}>Click here</button>
        </p>
    );
}

