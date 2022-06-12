import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
    const [text, setText] = useState("");

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>
                    <button
                        onClick={async () => {
                            const response = await fetch("/test-endpoint");
                            const json = await response.json();
                            setText(JSON.stringify(json));
                        }}
                    >
                        Send request
                    </button>
                </p>
                <p>
                    {text}
                </p>
            </header>
        </div>
    );
}

export default App;
