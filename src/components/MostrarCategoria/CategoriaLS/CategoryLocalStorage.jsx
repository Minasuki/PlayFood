import { useEffect, useState } from "react";
import {
  UseLocalStorageCategories,
  UseLocalStorageVideos,
} from "./UseLocalStorageCategories";
import derecha from "../../img/flecha-derecha.svg";
import izquierda from "../../img/flecha-izquierda.svg";
import {
  MailCategory,
  MealItems,
  MealItem,
  MealListStyle,
  ScrollButton,
  ScrollButtonIcon,
  IzquierdaStyle,
  DerechaStyle,
} from "../CategoriaAxios/StyleCategoriaMail";
import isEqual from "lodash/isEqual";
import PropTypes from 'prop-types';

function CategoryLocalStorage({ onImageClick }) {
  const categories = UseLocalStorageCategories();
  const videos = UseLocalStorageVideos();
  const mealItemsRefs = {};
  const [showScrollButtons, setShowScrollButtons] = useState({});

  const filterCategories = categories.reduce((filtered, categoria) => {
    if (videos.some((video) => video.selectedCategory === categoria.name)) {
      filtered.push(categoria);
    }
    return filtered;
  }, []);

  const scrollLeft = (category) => {
    if (mealItemsRefs[category]) {
      mealItemsRefs[category].scrollLeft -= 300; // Ajusta la cantidad de desplazamiento según tu preferencia
    }
  };

  const scrollRight = (category) => {
    if (mealItemsRefs[category]) {
      mealItemsRefs[category].scrollLeft += 300; // Ajusta la cantidad de desplazamiento según tu preferencia
    }
  };

  useEffect(() => {
    // Calcular el total de videos por categoría
    const videoCountByCategory = {};

    videos.forEach((video) => {
      if (!videoCountByCategory[video.selectedCategory]) {
        videoCountByCategory[video.selectedCategory] = 1;
      } else {
        videoCountByCategory[video.selectedCategory]++;
      }
    });

    // Obtener el ancho de la pantalla
    const screenWidth = window.innerWidth;

    // Determinar si mostrar u ocultar las flechas de desplazamiento para cada categoría
    const newShowScrollButtons = {};

    filterCategories.forEach((category) => {
      const videoCount = videoCountByCategory[category.name] || 0;
      newShowScrollButtons[category.name] = videoCount * 400 > screenWidth; // 400 es el ancho de cada video
    });

    if (!isEqual(newShowScrollButtons, showScrollButtons)) {
      setShowScrollButtons(newShowScrollButtons);
    }
  }, [filterCategories, videos, showScrollButtons]);

  return (
    <>
      {filterCategories.map((category) => (
        <MailCategory className={category.name} key={category.name}>
          <div key={category.name}>
            <h3>{category.name}</h3>

            <MealListStyle>
              {showScrollButtons[category.name] && (
                <IzquierdaStyle>
                  <ScrollButton onClick={() => scrollLeft(category.name)}>
                    <ScrollButtonIcon src={izquierda} alt="Scroll Left" />
                  </ScrollButton>
                </IzquierdaStyle>
              )}

              <MealItems
                className={category}
                ref={(ref) => (mealItemsRefs[category.name] = ref)}
              >
                {videos.map(
                  (video) =>
                    video.selectedCategory === category.name && (
                      <MealItem
                        key={video.strMeal}
                        onClick={() => onImageClick(video.strMeal)}
                      >
                        <img src={video.imageLink} alt="" />
                      </MealItem>
                    )
                )}
              </MealItems>

              {showScrollButtons[category.name] && (
                <DerechaStyle>
                  <ScrollButton onClick={() => scrollRight(category.name)}>
                    <ScrollButtonIcon src={derecha} alt="Scroll Right" />
                  </ScrollButton>
                </DerechaStyle>
              )}
            </MealListStyle>
          </div>
        </MailCategory>
      ))}
    </>
  );
}

CategoryLocalStorage.propTypes = {
  onImageClick: PropTypes.func.isRequired, 
};

export default CategoryLocalStorage;
