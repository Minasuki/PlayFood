import ReactPlayer from "react-player";
import PropTypes from 'prop-types'
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
} from "./StyleCategoriaHero";

const CategoriaHeroLS = ({ selectedMealDetailsLS }) => {
  const localStorageVideos = JSON.parse(localStorage.getItem("videos"));
  const vidio = localStorageVideos.filter(
    (video) => video.strMeal === selectedMealDetailsLS
  );

  return (
    <AppHero>
      {vidio.map((videos) => (
        <SelectedMeal key={videos.strMeal}>
          <SelectedMealDetails>
            <AppHeroDetails>
              <SelectedMealTitle>
                <h4>{videos.selectedCategory}</h4>
              </SelectedMealTitle>
              <SelectedMealDetailsText>{videos.strMeal}</SelectedMealDetailsText>
              <SelectedMealInstruction>
                {videos.instrucciones}
              </SelectedMealInstruction>
            </AppHeroDetails>

            <AppHeroIngredients>
              {videos.ingredientes && (
                <SelectedMealIngredients>
                  <h5>Ingredients:</h5>
                  <ul>
                    {videos.ingredientes.map((ingredient) => {
                      return ingredient ? (
                        <li key={ingredient}>
                          <p className="ingredient">{ingredient}</p>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </SelectedMealIngredients>
              )}
            </AppHeroIngredients>
          </SelectedMealDetails>

          {videos.videoLink && (
            <ReactPlayer
              url={videos.videoLink}
              controls
              className="str__video"
            />
          )}
        </SelectedMeal>
      ))}
    </AppHero>
  );
};

CategoriaHeroLS.propTypes = {
  selectedMealDetailsLS: PropTypes.array.isRequired
}

export default CategoriaHeroLS;
