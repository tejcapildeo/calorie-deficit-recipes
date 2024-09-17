import React from "react";
import Meal from "./Meal"

export default function MealList({mealData}) {

    const nutrients = mealData.nutrients
    return <main>
            <div className="nutrients">
                <h1>Macros</h1>
                <ul>
                    <li>Calories : {nutrients.calories.toFixed(0)}</li>
                    <li>Carbs : {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fats : {nutrients.fat.toFixed(0)}</li>
                    <li>Protein : {nutrients.protein.toFixed(0)}</li>
                </ul>
            </div>

            <div className="meals">
                {mealData.meals.map(meal => {
                    return <Meal key={meal.id} meal={meal} />
                })}
            </div>
        </main>
    
}