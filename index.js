function App() {





    return (
        <div className="container">
            <div className="calculator">
                <div id="display">
                    <div className="display-overal">test</div>
                    <div className="display-current">test</div>
                </div>
                <div className="buttons">
                    <div id="clear">AC</div>
                    <div id="divide">/</div>
                    <div id="multiply">X</div>
                    <div id="seven">7</div>
                    <div id="eight">8</div>
                    <div id="nine">9</div>
                    <div id="subtract">-</div>
                    <div id="four">4</div>
                    <div id="five">5</div>
                    <div id="six">6</div>
                    <div id="add">+</div>
                    <div id="one">1</div>
                    <div id="two">2</div>
                    <div id="three">3</div>
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