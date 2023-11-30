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

  const allRec = async () => {
    try {
      setIsloading(true);
      const res = await axios.get(apiUrl + query);
      const myData = res.data.meals;
      console.log(myData);
      setRecete(myData);
      setIsloading(true);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsloading(true);
    }
  };

  useEffect(() => {
    allRec();
  }, []); 

  return (
    <Router>
      <div>
        <h1>our recipie app</h1>
        <SerchText/>
        <div className="recetes">

        {recete.length != 0 ? (
          recete.map((rec: any) => (
            <div key={rec.idMeal} className="card">
              <div className="image">
                <img
                  src={rec.strMealThumb}
                  alt={rec.strMeal}
                  className="card-image"
                />
              </div>
              <div className="card-body">
                
                <span>{rec.strCategory} </span>
                <h5>{rec.strMeal}</h5>
                <div className="button">

                <Link className="ingrediant"
                  to={
                    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
                    rec.idMeal
                  }
                  >
                  Ingredient
                </Link>
                    </div>
              </div>
            </div>
          ))
          ) : (
            <h3>recipie not found</h3>
            )}
            </div>
            </div>
    </Router>
  );
}

export default App;
