import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Restaurant from "../restaurants.json";
import Header from "./compenents/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      {Restaurant.map((element) => {
        return (
          <section key={element.placeId}>
            <div>{element.name}</div>
            <img src={element.thumbnail} alt="" />
          </section>
        );
      })}
    </>
  );
}

export default App;
