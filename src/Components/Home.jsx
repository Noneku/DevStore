import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = 'https://fakestoreapi.com/products?limit=5';
// Créez un objet pour stocker les images de chaque catégorie
const categoryImages = {
  "men's clothing": 'src/assets/images/mode_homme.jpg',
  "jewelery": 'src/assets/images/bijoux.jpg',
  "electronics": 'src/assets/images/electronique2.jpg',
  "women's clothing": 'src/assets/images/mode_femme3.jpg'

};

export function Home() {
  const [posts, setPosts] = useState([]);// État pour stocker les données de l'API
  const [loading, setLoading] = useState(true);//État pour gérer le chargement des données

  useEffect(() => {
    //  exécuté au chargement du composant
    axios.get(baseURL)
      .then((response) => {
        setPosts(response.data);//Met à jour les données avec celles de l'API
        setLoading(false);// Indique que le chargement est terminé
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors du chargement des données :", error);
        setLoading(false);// En cas d'erreur, marquer le chargement comme terminé
      });
  }, []);// Le tableau vide signifie que cet effet est exécuté une seule fois, au chargement initial du composant

  // Si les données ne sont pas encore chargées, affichez un message de chargement
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

    return (
      <section >
        <div>
          <h2>Catégories</h2>
          <ul className="flex">
            {Object.entries(categoryImages).map(([category, image]) => (
              <li key={category}>
                <img src={image} alt={category} className="w-1/2" /> {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="produits">
          <h2>Produits Mieux Notés</h2>
          <ul className="flex">
            {posts.map((post) => (
              <li key={post.id}>{post.title}
              <img src={post.image} alt={post.title} className="w-1/2"/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
    
}

