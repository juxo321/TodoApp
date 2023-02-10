import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';


/*Ejemplo de como se crea un componente en React, en el siguiente ejemplo puedes ver como se hace uso de React.createElement para 
crear un h1 de manera tradicional, pero en la parte de arriba podemos ver como babel nos ayuda a hacer esto de una manera snecialla
haciendo uso de una sintaxis muy parecida  a HTML y facilitandolo*/
// function App(){
//   return (
//     <h1 id='title'>
//       Oli react
//     </h1>

    
//     React.createElement('h1', {id: 'title'}, 'Oli react')
//   );
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



