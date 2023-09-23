import { useState, useEffect } from "react";
import axios from "axios";
import { AppMail } from "./StyleCategoriaMail";
import MealList from "./MealList";
import { useFetchCategories } from "../../mobx/LlamarApi";
import CategoryLocalStorage from "../../MostrarCategoria/CategoriaLS/CategoryLocalStorage";
import CategoriaHero from "../Hero/CategoriaHero";
import CategoriaHeroLS from "../Hero/CategoriaHeroLS";

const CategoriaMail = () => {
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [selectedMealDetails, setSelectedMealDetails] = useState(null);
  const [selectedMealDetailsLS, setSelectedMealDetailsLS] = useState(null);
  const [isLocalStorageImage, setIsLocalStorageImage] = useState(false);

  useFetchCategories(setCategories, setCategoryData);

  useEffect(() => {
    if (selectedMealId) {
      // El código existente para cargar los detalles del plato seleccionado
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMealId}`
        )
        .then((response) => {
          const data = response.data;
          setSelectedMealDetails(data.meals[0]);
        });
    } else {
      // Verificar si hay categorías en el localStorage
      const localStorageCategories = JSON.parse(
        localStorage.getItem("categorias")
      );

      if (localStorageCategories && localStorageCategories.length > 0) {
        // Obtener el nombre de la primera categoría
        const firstCategoryName = localStorageCategories[0].name;

        // Obtener el primer elemento en esa categoría desde categoryData
        const firstElementInCategory =
          categoryData[firstCategoryName] && categoryData[firstCategoryName][0];

        if (firstElementInCategory) {
          setSelectedMealId(firstElementInCategory.idMeal);
        }
      }
    }
  }, [selectedMealId, categories, categoryData]);

  const handleImageClick = (mealId) => {
    setSelectedMealId(mealId);
    mealId && setIsLocalStorageImage(false);
  };

  const handleImageClickLocalStorage = (strMeal) => {
    // Obtener los detalles del meal del local storage
    const localStorageVideos = JSON.parse(localStorage.getItem("videos"));

    const meal = localStorageVideos.some((video) => video.strMeal === strMeal);

    meal && setSelectedMealDetailsLS(strMeal);
    meal && setIsLocalStorageImage(true);
  };

  return (
<div>

      {/*  ///////////////////////////////////////////////////  */}
      {/*  //////////  Aqui se muestra el Hero  //////////////  */}
      <section>
        {isLocalStorageImage ? (
          <CategoriaHeroLS selectedMealDetailsLS={selectedMealDetailsLS} />
        ) : (
          <CategoriaHero selectedMealDetails={selectedMealDetails} />
        )}
      </section>

      {/*  ///////////////////////////////////////////////////  */}
      {/*  /////  Aqui se muestra el Cuerpo de la pagina  ///  */}
      <AppMail>
        {Object.entries(categoryData).map(([category, meals]) => {
          // Verificar si la categoría existe en el localStorage
          const localStorageCategories = JSON.parse(
            localStorage.getItem("categorias")
          );

          if (
            !localStorageCategories ||
            !localStorageCategories.some((c) => c.name === category)
          ) {
            // La categoría no existe en el localStorage, no la renderizamos
            return null;
          }

          return (
            <MealList
              key={category}
              category={category}
              meals={meals}
              onImageClick={handleImageClick}
            />
          );
        })}
      </AppMail>

      <AppMail>
        <CategoryLocalStorage onImageClick={handleImageClickLocalStorage} />
      </AppMail>
    </div>
  );
};

export default CategoriaMail;
