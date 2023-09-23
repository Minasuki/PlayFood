import { useState, useEffect } from "react";

// Hook para obtener las categorías del localStorage
export const UseLocalStorageCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Obtener categorías del localStorage
    const storedCategories =
      JSON.parse(localStorage.getItem("categorias")) || [];
    setCategories(storedCategories);
  }, []);

  return categories;
};

// Hook para obtener los videos del localStorage
export const UseLocalStorageVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Obtener videos del localStorage
    const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(storedVideos);
  }, []);

  return videos;
};
