import Options from "./Components/Options";
import Result from "./Components/Result";

import "./Styles/App.scss";
import "./Styles/Options.scss";
import "./Styles/Result.scss";

function App() {
  return (
    <>
      <h1>Bio Generator</h1>
      <div className="App">
        <Options></Options>
        <Result></Result>
      </div>
    </>
  );
}

export default App;
