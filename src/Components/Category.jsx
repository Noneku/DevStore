import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseURL = "https://fakestoreapi.com/products";

function CategoryProducts() { // Correction : Remplacez "const" par "function"
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setCategoryProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors du chargement des données :",
          error
        );
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <section className="flex flex-col justify-between text-center items-center my-8">
      
      <h2 className="font-bold text-3xl mb-2">Produits de la catégorie {category}</h2>
      <ul className="flex justify-between text-center items-center h-full w-full">
        {categoryProducts.map((product) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-xl mb-2 m-6">
          <li key={product.id}>
            <h3 className="font-bold text-xl mb-2">{product.title}</h3>
            <p>{product.description}</p>
            <div className="flex flex-col justify-between text-center items-center h-full w-full">
            <img src={product.image} alt={product.title} className="w-full" />
          </div>
          </li>
          </div>
        ))}
      </ul>
      
    </section>
  );
}

export default CategoryProducts; // Correction : Exportez "CategoryProducts" au lieu de "Category"
