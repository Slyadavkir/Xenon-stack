
import './App.css';
import Navbar from "./component/layout/Header/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebFont from "webfontloader";
import React from 'react';
import { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails  from './component/Product/ProductDetails.js';
import Products  from './component/Product/Products.js';
import Search  from './component/Product/Search.js';
import store from "./store";
import LoginSignUp from './component/User/LoginSignUp';
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js"
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess.js';
import MyOrders from './component/Order/MyOrders.js';
import OrderDetails from './component/Order/OrderDetails.js';
import Dashboard from './component/admin/Dashboard.js';
import ProductList from './component/admin/ProductList.js';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct.js';
import OrderList from './component/admin/OrderList.js';
import ProcessOrder from './component/admin/ProcessOrder.js';
import UsersList from './component/admin/UsersList.js';
import UpdateUser from './component/admin/UpdateUser.js';
import ProductReviews from './component/admin/ProductReviews.js';
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";






function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }


  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto", "Droid Sans", "Chilanka"]
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e)=>e.preventDefault());

 

  const Elem = () => {
    return (
     
      <Elements stripe={loadStripe(stripeApiKey)} >
     <Payment />
      </Elements>
 
    );
  };


  return ( 
    <Router>
   <Navbar />
   {isAuthenticated && <UserOptions user={user} />}
   
   <Routes>
   <Route exact path="/" element={<Home/>} />
   <Route exact path="/product/:id" element={<ProductDetails/>} />
   <Route exact path="/products" element={<Products/>} />
   <Route path="/products/:keyword" element={<Products/>} />
   <Route exact path="/search" element={<Search/>} />
   <Route exact path="/login" element={<LoginSignUp/>} />
   <Route exact path="/contact" element={<Contact/>} />
   <Route exact path="/about" element={<About/>} />
   <Route exact path="/account"
    element={isAuthenticated?<Profile />:<LoginSignUp />} />
   
   <Route exact path="/me/update"
    element={isAuthenticated?<UpdateProfile />:<LoginSignUp />} />

   <Route exact path="/password/update"
    element={isAuthenticated?<UpdatePassword />:<LoginSignUp />} />


   <Route exact path="/password/forgot" element={<ForgotPassword/>} />
   <Route exact path="/password/reset/:token" element={<ResetPassword/>} />
   <Route exact path="/cart" element={<Cart/>} />
  
   
   <Route exact path="/shipping"
    element={isAuthenticated?<Shipping/>:<LoginSignUp />} />


{stripeApiKey && (
   <Route path="/process/payment" element={<Elem/>} />
)}


<Route exact path="/success"
    element={isAuthenticated?<OrderSuccess/>:<LoginSignUp />} />

<Route exact path="/orders"
    element={isAuthenticated?<MyOrders/>:<LoginSignUp />}/>

<Route  exact path="/order/">

<Route exact path="confirm"
    element={isAuthenticated?<ConfirmOrder/>:<LoginSignUp />} />

<Route exact path=":id"
    element={isAuthenticated?<OrderDetails/>:<LoginSignUp />} />

 </Route>
 <Route  exact path="/admin/dashboard"
    element={isAuthenticated?<Dashboard/>:<LoginSignUp />}/>

 <Route  exact path="/admin/products"
    element={isAuthenticated?<ProductList/>:<LoginSignUp />}/>
 
 <Route  exact path="/admin/product"
    element={isAuthenticated?<NewProduct/>:<LoginSignUp />}/>
 
 <Route  exact path="/admin/products/:id"
    element={isAuthenticated?<UpdateProduct/>:<LoginSignUp />}/>
 
 
 <Route  exact path="/admin/orders"
    element={isAuthenticated?<OrderList/>:<LoginSignUp />}/>
 

 <Route  exact path="/admin/order/:id"
    element={isAuthenticated?<ProcessOrder/>:<LoginSignUp />}/>
 
 
 <Route  exact path="/admin/users"
    element={isAuthenticated?<UsersList/>:<LoginSignUp />}/>
 
 <Route  exact path="/admin/user/:id"
    element={isAuthenticated?<UpdateUser/>:<LoginSignUp />}/>
 
 
 <Route  exact path="/admin/reviews"
    element={isAuthenticated?<ProductReviews/>:<LoginSignUp />}/>
       
     </Routes>
     
   <Footer />
   </Router>
  );
} 

export default App;




