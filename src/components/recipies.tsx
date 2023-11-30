import React from "react";
// import  "./recipies.scss";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const recp = {
  image:
    "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
  name: "plakali",
  prix: "200",
};

function Recipie(props: any) {
  //const {idMeal,strMealThumb,strMeal,strCategory}=props
  return (
    <div className="card">
      <div className="image">
        <img
          src={props.strMealThumb}
          alt={props.strMeal}
          className="card-image"
        />
      </div>
      <div className="card-body">
        <span>{props.strCategory} </span>
        <h5>{props.strMeal}</h5>
        <div className="button">
          <Link
            className="ingrediant"
            to={
              "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
              props.idMeal
            }
          >
            Ingredient
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recipie;
