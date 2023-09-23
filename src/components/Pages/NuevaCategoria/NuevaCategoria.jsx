import { useEffect, useState } from "react";
import FormNuevaCategoria from "./FormNuevaCategoria";

const NuevaCategoria = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [editCategoria, setEditCategoria] = useState([]);

  useEffect(() => {
    // Recuperar las categorías del Local Storage
    const storedCategories =
      JSON.parse(localStorage.getItem("categorias")) || [];
    setCategories(storedCategories);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = { name, description, color };

    // Obtén las categorías existentes del Local Storage
    const storedCategories =
      JSON.parse(localStorage.getItem("categorias")) || [];

    // Verifica si es una edición o una adición
    const isEdit = editMode;

    // Crea una nueva lista de categorías según sea una edición o adición
    const updatedCategories = isEdit
      ? storedCategories.map((category) =>
          category.name === editCategoria.name ? newCategory : category
        )
      : [...storedCategories, newCategory];

    // Actualiza el estado local con los datos recién guardados
    setCategories(updatedCategories);

    // Actualiza en el Local Storage
    localStorage.setItem("categorias", JSON.stringify(updatedCategories));

    handleClear();
  };

  const handleEdit = (category) => {
    // Aquí puedes buscar la categoría estática en el Local Storage
    const storedStaticCategories =
      JSON.parse(localStorage.getItem("categorias")) || []; // Aqui se guarda todo el contenido del local storage

    // Encuentra la categoría estática que coincide con el ID
    const staticCategory = storedStaticCategories.find(
      (staticCat) => staticCat.id === category.id
    ); // Aqui busca con el id el elemento que se seleccione.

    if (staticCategory) {
      // Si la categoría estática existe, actualízala en lugar de crear una nueva
      staticCategory.name = category.name;
      staticCategory.description = category.description;
      staticCategory.color = category.color;
    }
    setEditCategoria(staticCategory);

    setName(category.name);
    setDescription(category.description);
    setColor(category.color);
    setEditMode(true);
  };

  const handleDelete = (category) => {
    // Obtén las categorías existentes del Local Storage
    const storedCategories =
      JSON.parse(localStorage.getItem("categorias")) || [];

    // Filtra las categorías para eliminar la que coincide con la que deseas borrar
    const updatedCategories = storedCategories.filter(
      (storedCategory) => storedCategory.name !== category.name
    );

    // Actualiza el estado local con los datos recién eliminados
    setCategories(updatedCategories);

    // Actualiza en el Local Storage
    localStorage.setItem("categorias", JSON.stringify(updatedCategories));
  };

  const handleClear = () => {
    setName("");
    setDescription("");
    setColor("");
    setEditMode(false);
  };

  return (
    <>
    <FormNuevaCategoria
    handleSubmit={handleSubmit}
    name={name}
    description={description}
    color={color}
    editMode={editMode}
    categories={categories}
    editCategoria={editCategoria}
    handleNameChange={handleNameChange}
    handleDescriptionChange={handleDescriptionChange}
    handleColorChange={handleColorChange}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    handleClear={handleClear}
    />
    </>
  );
};

export default NuevaCategoria;
