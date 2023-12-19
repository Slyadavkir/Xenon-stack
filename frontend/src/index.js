import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{Provider} from "react-redux";
import store from "./store";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const stripePromise = loadStripe("pk_test_51NsMgPSG815WI9StTsiqovq24K6n4G25RXgA6gKEzHpgFiazpscwtQwqtiK46bMWru40R9pzIkM3l2ws6yy6knIn00Zfu8EG8G");

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
     <AlertProvider template={AlertTemplate} {...options}>
     
    <App />
 
  
  </AlertProvider>
  </Provider>
  </React.StrictMode>
);


