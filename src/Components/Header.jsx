import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Collapse, Typography, Button, Menu, MenuHandler, MenuList, MenuItem, Avatar, Card, IconButton, Input } from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon, Bars2Icon } from "@heroicons/react/24/outline";
import jwtDecode from "jwt-decode";
import axios from "axios";

// Composant de la barre de navigation
export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));

    // Gestion de l'authentification ici
    const token = localStorage.getItem('authToken');
    let decode = jwtDecode(token);

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleProductClick = (product) => {
    const productId = String(product.id);
    // Rediriger vers la page du produit
    // Assurez-vous que vous avez configuré vos routes pour gérer cela.
  }

  useEffect(() => {
    if (searchValue !== "") {
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          if (response.data) {
            setProducts(response.data);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setProducts([]);
    }
  }, [searchValue]);

  const filteredCategories = products?.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 bg-orange-500">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        {isAuthenticated ? (
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
            Je suis connecté
          </Typography>
        ) : (
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
            Je suis déconnecté
          </Typography>
        )}
        
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            value={searchValue}
            onChange={handleChange}
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          {searchValue !== '' && (
            <ul className="suggestions absolute top-12 bg-gray-100">
              {filteredCategories.map((product, index) => (
                <li
                  key={index}
                  onClick={() => handleProductClick(product)}
                >
                  {product.title}
                </li>
              ))}
            </ul>
          )}
          <Button size="sm" className="absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
        
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          <li>
            <NavLink to="/login">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Se connecter
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Je me connecte ici.
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inscription">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Inscription
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Je m'inscris ici.
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink to="/panier">
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Mon panier.
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Je consulte mon panier.
              </Typography>
            </NavLink>
          </li>
        </ul>

        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>

      <Collapse open={isNavOpen} className="overflow-scroll">
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
          <li>
            <NavLink to="/profile">
              <Typography variant="small" color="blue-gray" className="font-normal">
                Account
              </Typography>
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
                <UserCircleIcon className="h-[18px] w-[18px]" /> Account
              </MenuItem>
            </NavLink>
          </li>
        </ul>
      </Collapse>
    </Navbar>
  );
}

export default Header;
