import { useRef } from "react";
import PropTypes from 'prop-types';
import {
  MailCategory,
  MealItems,
  MealItem,
  MealListStyle,
  ScrollButton,
  ScrollButtonIcon,
  IzquierdaStyle,
  DerechaStyle,
} from "./StyleCategoriaMail";
import izquierda from "../../img/flecha-izquierda.svg";
import derecha from "../../img/flecha-derecha.svg";

function MealList({ category, meals, onImageClick }) {
  const mealItemsRef = useRef(null);

  const scrollLeft = () => {
    if (mealItemsRef.current) {
      mealItemsRef.current.scrollLeft -= 300; // Ajusta la cantidad de desplazamiento según tu preferencia
    }
  };

  const scrollRight = () => {
    if (mealItemsRef.current) {
      mealItemsRef.current.scrollLeft += 300; // Ajusta la cantidad de desplazamiento según tu preferencia
    }
  };

  return (
    <MailCategory className={category}>
      <h3>{category}</h3>
      <MealListStyle>
        <IzquierdaStyle>
          <ScrollButton onClick={scrollLeft}>
            <ScrollButtonIcon src={izquierda} alt="Scroll Left" />
          </ScrollButton>
        </IzquierdaStyle>

        <MealItems className={category} ref={mealItemsRef}>
          {meals.map((meal) => (
            <MealItem
              key={meal.idMeal}
              onClick={() => onImageClick(meal.idMeal)}
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </MealItem>
          ))}
        </MealItems>

        <DerechaStyle>
          <ScrollButton onClick={scrollRight}>
            <ScrollButtonIcon src={derecha} alt="Scroll Right" />
          </ScrollButton>
        </DerechaStyle>
      </MealListStyle>
    </MailCategory>
  );
}

MealList.propTypes = {
  category: PropTypes.string.isRequired, // Nombre de la categoría
  meals: PropTypes.array.isRequired, // Arreglo de comidas
  onImageClick: PropTypes.func.isRequired, // Función para manejar el clic en una imagen
};

export default MealList;
