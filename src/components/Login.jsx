import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleLogin() {
        axios.get(`https://fakestoreapi.com/users`).then(response => {
            const user = response.data.find(user => user.username === username && user.password === password);

            if (user) {
                console.log("Utilisateur connecté avec succès");
            } else {
                setErrorMessage("Identifiant ou mot de passe incorrect");
            }
        }).catch(error => {
            console.error("Erreur lors de la récupération des utilisateurs:", error);
        });
    }

    function handleForgotPassword() {
        console.log(`Demande de réinitialisation du mot de passe pour ${username}`);
    }

    return (
        <div>
            <div class="form-group">
                <label for="exampleInputemail">E-mail</label>
                <input type="email"
                class="form-control"/>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Mot de passe</label>
                <input type="password" class="form-control"/>
                    </div>
            <button onClick={handleLogin}>Se connecter</button>
            <button onClick={handleForgotPassword}>Mot de passe oublié</button>
        </div>
    );
}

export default Login;