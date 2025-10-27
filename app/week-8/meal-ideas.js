"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdea(apiIngredient) {
        try {
            const mealFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${apiIngredient}`);
            const mealData = await mealFetch.json();
            setMeals(mealData);
            console.log(mealData);
            return mealData;
        } catch (error) {
            console.log(error);
        }

    }

    async function loadMealIdeas() {
        fetchMealIdea(ingredient);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);


    return (
        <div>
            {/* <p>{meals.meals[0].strMeal}</p> */}
            {meals.meals.map((meal) => {
            return(<p>{meal.strMeal}</p>)
            })}
        </div>
    )
}