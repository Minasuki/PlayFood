import { useEffect } from "react";
import axios from "axios";
import Add from '../mobx/AddLocalStorage'

export const useFetchCategories = (setCategories, setCategoryData) => {
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        const data = response.data;
        const firstFourCategories = data.categories
          .slice(0, 4)
          .map((category) => category.strCategory);
        
          if(localStorage.getItem('categorias') === null){
            // Guarda las categorías en el Local Storage
          localStorage.setItem("categorias", JSON.stringify(firstFourCategories));
          Add();
          }

        setCategories(firstFourCategories);
        
        const newCategoryData = {};
        firstFourCategories.forEach((category) => {
          axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((response) => {
              const data = response.data;
              const limitedMeals = data.meals.slice(0, 10);
              newCategoryData[category] = limitedMeals;
              setCategoryData(newCategoryData);
            });
        });
      });
  }, [setCategories, setCategoryData]);
};
