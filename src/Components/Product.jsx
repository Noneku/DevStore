import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const { id } = useParams(); // Utilisez useParams pour obtenir le paramètre "id" de l'URL

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Utilisez une fonction asynchrone pour effectuer la requête axios
    async function fetchData() {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const product = response.data;
        
        // Mise à jour de l'état des données
        setPosts([product]);
        setLoading(false);
      } catch (error) {
        console.error("Une erreur s'est produite lors du chargement des données :", error);
        setLoading(false); // En cas d'erreur, marquez le chargement comme terminé
      }
    }

    fetchData(); // Appelez la fonction fetchData pour effectuer la requête au chargement initial du composant
  }, [id]); // Utilisez "id" comme dépendance pour l'effet

  return (
   
        <div>
          
          <ul className="flex justify-between text-center items-center h-full w-full">
  {posts.map((post) => (
    <li key={post.id} className="text-sm">
        <h1>{post.title}</h1>
      <div className="flex flex-col justify-between text-center items-center h-full w-full">
        <div className="w-1/2">
            <p></p>
          <img src={post.image} alt={post.title} className="w-full" />
        </div>
        <p>{post.description}</p>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Product;
