import React from "react";
import "../Home.css";

class Buttons extends React.Component {
  render() {
    return (
      <div id="buttons">
        <button className="button--main">Wyświetl aktualny skład</button>
        <button className="button--main">Pokaż tabelę</button>
        <button className="button--main">Składki</button>
        <button className="button--main">Kiedyś grali</button>
      </div>
    );
  }
}

export default Buttons;
