import React, {useState, useEffect} from "react";

export default function Meal({meal}){
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=d471a7113c61479f8ce74e5f4b6b6be1&includeNutrition=false`)
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image)
        })
        .catch(() => {
            console.log("something went wrong")
        })
    }, [meal.id]);  //remember this means that everytime meal.id changes, we fetch



    return <article>
            <h1> {meal.title}</h1>
            <img src={imageUrl} alt="recipe"/>
            <ul className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings : {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl}> Go to recipe </a>
         </article>
    
}