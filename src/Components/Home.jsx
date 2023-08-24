import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importer Link depuis React Router

const baseURL = "https://fakestoreapi.com/products";
// Créez un objet pour stocker les images de chaque catégorie
const categoryImages = {
  "men's clothing": "src/assets/images/mode_homme.jpg",
  "jewelery": "src/assets/images/bijoux.jpg",
  "electronics": "src/assets/images/electronique2.jpg",
  "women's clothing": "src/assets/images/mode_femme3.jpg",
};

export function Home() {
  const [posts, setPosts] = useState([]); // État pour stocker les données de l'API
  const [loading, setLoading] = useState(true); //État pour gérer le chargement des données

  useEffect(() => {
    //  exécuté au chargement du composant
    axios
      .get(baseURL)
      .then((response) => {
        // setPosts(response.data);//Met à jour les données avec celles de l'API
        // setLoading(false);// Indique que le chargement est terminé
        //  Triez les produits par notation (du plus élevé au plus bas)
        const sortedProducts = response.data
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 5); // Limite la liste triée aux 5 premiers éléments

        // Mettez à jour les données avec les produits triés
        setPosts(sortedProducts); 
        setLoading(false); // En cas d'erreur, marquer le chargement comme terminé
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors du chargement des données :",
          error
        );
       
      });
  }, []); // Le tableau vide signifie que cet effet est exécuté une seule fois, au chargement initial du composant

  // Si les données ne sont pas encore chargées, affichez un message de chargement
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <section>
      <div className="flex flex-col justify-between text-center items-center my-8">
        <h2 className="my-8">Catégories</h2>
        <ul className="flex justify-between text-center items-center h-full w-full">
          {Object.entries(categoryImages).map(([category, image]) => (
            <li key={category} className="text-sm ">
              <Link to={`/category/${category}`}> {/* Utilisez Link pour créer un lien vers la catégorie */}
                <div className="flex flex-col justify-between text-center items-center h-full w-full">
                  <img src={image} alt={category} className="w-1/2" /> {category}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-between text-center items-center my-8">
        <h2 className="my-8">Produits Mieux Notés</h2>
        <ul className="flex justify-between text-center items-center h-full w-full">
          {posts.map((post) => (
            <li key={post.id} className="text-sm">
              <div className="flex flex-col justify-between text-center items-center h-full w-full">
                <img src={post.image} alt={post.title} className="w-1/2" />
                {post.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
