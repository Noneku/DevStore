import React,{useEffect,useState} from "react";
import axios from "axios";


const baseURL = 'https://fakestoreapi.com/products';
export function Home() 
{
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);
  console.log(posts)
  // if (!posts) return null;

  return (
    <div>
      
  {posts
  
  .map((post)=><li>{post.category}</li>)

  
  
  
  
  
  }
    </div>
  );
}
