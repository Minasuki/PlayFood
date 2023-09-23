import ReactPlayer from "react-player";
import PropTypes from 'prop-types';
import {
  AppHero,
  AppHeroDetails,
  SelectedMeal,
  SelectedMealTitle,
  SelectedMealDetails,
  SelectedMealDetailsText,
  SelectedMealIngredients,
  SelectedMealInstruction,
  AppHeroIngredients,
  Videos,
} from "./StyleCategoriaHero";
import descripcionesCategorias from "../../mobx/descripcionNoDinamica";

const CategoriaHero = ({ selectedMealDetails }) => {
  let nombreDeCategoria;
  selectedMealDetails &&
    (nombreDeCategoria = selectedMealDetails.strCategory || "#000");
  const addDescripciones = descripcionesCategorias;

  return (
    <AppHero>
      {selectedMealDetails && (
        <SelectedMeal>
          <SelectedMealDetails>
            <AppHeroDetails>
              <SelectedMealTitle>
                <div
                  style={{
                    backgroundColor: addDescripciones[nombreDeCategoria].color,
                  }}
                >
                  <h4>{selectedMealDetails.strCategory}</h4>
                </div>
              </SelectedMealTitle>
              <SelectedMealDetailsText>
                {selectedMealDetails.strMeal}
              </SelectedMealDetailsText>
              <SelectedMealInstruction>
                {selectedMealDetails.strInstructions}
              </SelectedMealInstruction>
            </AppHeroDetails>
            <AppHeroIngredients>
              {selectedMealDetails.strIngredient1 && (
                <SelectedMealIngredients>
                  <h5>Ingredients:</h5>
                  <ul>
                    {Array.from({ length: 20 }).map((_, index) => {
                      const ingredient =
                        selectedMealDetails[`strIngredient${index + 1}`];
                      const measure =
                        selectedMealDetails[`strMeasure${index + 1}`];

                      if (!ingredient) return null;

                      return (
                        <li key={ingredient}>
                          <p>{ingredient}</p>
                          <p>{measure}</p>
                        </li>
                      );
                    })}
                  </ul>
                </SelectedMealIngredients>
              )}
            </AppHeroIngredients>
          </SelectedMealDetails>

          <Videos>
            {selectedMealDetails.strYoutube && (
              <ReactPlayer
                url={selectedMealDetails.strYoutube}
                controls
                width="100%"
                height="95%"
              />
            )}
          </Videos>
        </SelectedMeal>
      )}
    </AppHero>
  );
};

CategoriaHero.propTypes = {
  selectedMealDetails: PropTypes.array.isRequired
}

export default CategoriaHero;
