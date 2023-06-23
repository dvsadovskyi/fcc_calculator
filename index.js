function App() {
    return (
        <div className="container">
            <div className="calculator">
                <div id="display"></div>
                <div className="buttons">
                    <div id="clear">AC</div>
                    <div id="divide">/</div>
                    <div id="multiply">X</div>
                    <div id="seven">7</div>
                    <div id="eight">8</div>
                    <div id="nine">9</div>
                    <div id="subtract">-</div>
                    <div id="4">4</div>
                    <div id="5">5</div>
                    <div id="6">6</div>
                    <div id="add">+</div>
                    <div id="1">1</div>
                    <div id="2">2</div>
                    <div id="3">3</div>
                    <div id="equals">=</div>
                    <div id="zero">0</div>
                    <div id="decimal">.</div>
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)