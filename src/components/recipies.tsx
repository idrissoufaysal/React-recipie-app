import React from 'react'
import  "./recipies.scss";
import { Link } from 'react-router-dom';

const recp={
image:'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
    name:"plakali",
    prix:"200"
}

function Recipie(props:any) {
  const {idMeal,strMealThumb,strMeal,strCategory}=props
  return (
    <div className="card">
        <div className="image">
        <img src={strMealThumb} alt={strMeal}  className='card-image'/>
        </div>
        <div className="card-body">
           <span>{strCategory} </span>
           <h5>{strMeal}</h5>
           <Link 
           to={'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+idMeal}></Link>
        </div>

    </div>
  )
}

export default Recipie