import descripcionesCategorias from "./descripcionNoDinamica";

const AddLocalStorage = () => {
  const localStorageCategories = JSON.parse(localStorage.getItem("categorias"));

  if (localStorageCategories && localStorageCategories.length > 0) {
    const axiosCategories = localStorageCategories.map((category) => ({
      name: category,
      description: descripcionesCategorias[category].description || "",
      color: descripcionesCategorias[category].color,
    }));
    localStorage.setItem("categorias", JSON.stringify(axiosCategories));
    // Almacena las categorías en el Local Storage como cadena JSON
  }
};

export default AddLocalStorage;
