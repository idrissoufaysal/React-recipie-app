import { useState, useEffect } from "react";
import "./App.scss";
import "./components/recipies.scss";
import Recipie from "./components/recipies.tsx";
import axios from "axios";
import SerchText from "./components/serchText.tsx";
import { Link, BrowserRouter as Router } from "react-router-dom";

type Recepie = {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
};

function App() {
  const [recete, setRecete] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [query, setQery] = useState("");
  const [error, setError] = useState(false);

  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const seachRecipie = async () => {
    try {
      setIsloading(true);
      const res = await axios.get(apiUrl + query);
      const myData = res.data.meals;
      console.log(myData);
      setRecete(myData);
      setIsloading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsloading(true);
    }
  };

  function handlSearch(e: React.FormEventHandler<HTMLFormElement> | undefined) {
    seachRecipie();
  }

  useEffect(() => {
    seachRecipie();
  }, []);

  return (
    <Router>
      <div>
        <Recipie />
        <h1>our recipie app</h1>
        {/* <SerchText
        value={query}
        handleSubmit={handlSearch}
        onChange={ (e)=>{setQery(e.target.value)}}
        isLoading={isLoading}
        /> */}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            seachRecipie();
          }}
        >
          <input
            value={query}
            disabled={isLoading}
            placeholder="Rechercher une recette.."
            className="form-control"
            onChange={(e) => {
              setQery(e.target.value);
            }}
          />

          <input
            type="submit"
            className="btn"
            disabled={isLoading}
            value="Rechercher"
          />
        </form>
        <div className="recepie">
          {recete.length != 0 ? (
            recete.map((rec: any) => (
              <Recipie
                key={rec.idMeal}
                strCategory={rec.strCategory}
                strMeal={rec.strMeal}
                strMealThumb={rec.strMealThumb}
                idMeal={rec.idMeal}
              />
            ))
          ) : (
            <h3 style={{ alignItems: "center" }}>recipie not found</h3>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
