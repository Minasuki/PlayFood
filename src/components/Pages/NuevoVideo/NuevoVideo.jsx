import { useEffect, useState } from "react";
import FormNuevoVideo from "./FormNuevoVideo";

const NuevoVideo = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [strMeal, setStrMeal] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [instrucciones, setInstrucciones] = useState("");
  const [inputText, setInputText] = useState("");
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    // Obtener las categorías del localStorage
    const localStorageCategories = JSON.parse(
      localStorage.getItem("categorias")
    );

    if (localStorageCategories && localStorageCategories.length > 0) {
      // Obtener solo los nombres de las categorías
      const categoryNames = localStorageCategories.map(
        (category) => category.name
      );

      // Establecer las categorías en el estado
      setCategories(categoryNames);
    }
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTitleChange = (event) => {
    setStrMeal(event.target.value);
  };

  const handleVideoLinkChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const handleInstruccionesChange = (event) => {
    setInstrucciones(event.target.value);
  };

  const handleIngredientesChange = (e) => {
    setInputText(e.target.value);
  };

  const handleIngredientesKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita que el formulario se envíe
      handleAddIngrediente(); // Agrega el ingrediente
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificar si ingredientes los campos están llenos antes de agregar a la lista
    if (
      strMeal &&
      videoLink &&
      imageLink &&
      selectedCategory &&
      ingredientes &&
      instrucciones
    ) {
      const newVideoData = {
        strMeal,
        videoLink,
        imageLink,
        selectedCategory,
        instrucciones,
        ingredientes,
      };

      const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
      storedVideos.push(newVideoData);
      localStorage.setItem("videos", JSON.stringify(storedVideos));

      handleClear();
    } else {
      // Mostrar un mensaje de error o realizar alguna acción
      console.log(
        "Completa ingredientes los campos antes de agregar a la lista."
      );
    }
  };

  const handleClear = () => {
    setSelectedCategory("");
    setStrMeal("");
    setVideoLink("");
    setImageLink("");
    setInstrucciones("");
    setIngredientes([]);
  };

  const handleAddIngrediente = () => {
    if (inputText.trim() === "") {
      return; // Evita agregar ingredientes vacíos
    }

    // Agrega el ingrediente
    setIngredientes([...ingredientes, inputText]);
    // Limpia el campo de entrada
    setInputText("");
  };

  const handleEliminarIngrediente = (index) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes.splice(index, 1);
    setIngredientes(nuevosIngredientes);
  };

  return (
    <div>
      <FormNuevoVideo
        categories={categories}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onAddIngrediente={handleAddIngrediente}
        strMeal={strMeal}
        videoLink={videoLink}
        imageLink={imageLink}
        selectedCategory={selectedCategory}
        instrucciones={instrucciones}
        inputText={inputText}
        ingredientes={ingredientes}
        handleTitleChange={handleTitleChange}
        handleVideoLinkChange={handleVideoLinkChange}
        handleImageLinkChange={handleImageLinkChange}
        handleCategoryChange={handleCategoryChange}
        handleInstruccionesChange={handleInstruccionesChange}
        handleIngredientesChange={handleIngredientesChange}
        handleIngredientesKeyDown={handleIngredientesKeyDown}
        handleAddIngrediente={handleAddIngrediente}
        handleEliminarIngrediente={handleEliminarIngrediente}
      />
    </div>
  );
};

export default NuevoVideo;
