import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg"
import React from "react";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh hi react</h1>
        </section>
        <img src={sword} alt="sword" width="250px"></img>
        <img src={swordSvg} alt="swordSvg" width="250px"></img>
      </main>
      <Recipes />
    </>
  );
};

export default App;
