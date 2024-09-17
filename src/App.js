import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MealList from "./MealList"

function App() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const [diet, setDiet] = useState('');

    function handleChange(e) {
      setCalories(e.target.value);
    }

    function handleDietChange(e) {
      setDiet(e.target.value)
    }

    function getMealData() {
      const dietParam = diet === '' ? '' : `&diet=${diet}`
      const apiUrl = `https://api.spoonacular.com/mealplanner/generate?apiKey=d471a7113c61479f8ce74e5f4b6b6be1&timeFrame=day&targetCalories=${calories}${dietParam}`;
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data); 
        console.log(data);
      })
      .catch(() =>{console.log("Something went wrong!")})
    }

  return (
    <div className='App'>
      <div className='headingcontainer'>
        <p>Abs are made in the kitchen! Input your estimated daily calories and select your diet preferences. Then generate your meal plan!</p>
        
      </div>
      <div className='controls'>
        <input
          type='number'
          placeholder='Input calories (eg.2000)'
          onChange={handleChange}
        />        

      <select
        onChange={handleDietChange}
      > 
        <option value="">No restriction</option> {/* Default option */}
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="ketogenic">Ketogenic</option>
      </select>

      </div>

      

      <button onClick={getMealData}>
        Get Your Meal Plan
      </button>
      {mealData && <MealList mealData ={mealData}/>}
    </div>
  );
}

export default App;
