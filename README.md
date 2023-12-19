# Xenon-stack
E-commerce website.
This is a full stack e-commerce website. This project consist of two modules - User and Admin

USER MODULE ---

Users can register themselves with email and password.
User can log in to their account and see all products and purchase them.
Add / Remove products from the card.
Submit reviews in any product. 
Search particular product and filter products according to their price and ratings.
The payment gateway is made through Stripe API.

ADMIN MODULE ---

Admin can log in to their account with email id and password.
Admin can add / create / delete any product.
Admin can remove any user or change the user's role to admin.
Admin can delete reviews of any product. 
Admin can change the state of any order i.e, PROCESSING / SHIPPED / DELIVERED


TO RUN THE PROJECT ---
Make sure your device has node.js version 18


NOTE -- In the directory 
shopie/backend/config/config.env   
In config.env file please change all the variable with your own variables to run the project.
The email and password for admin login are -
Email- abc@gmail.com
Password -password


Open the folder - SHOPIE then do following steps - 
Step 1 - To start the backend, in the terminal type ----> npm run dev 
Step 2 - To start front end, start another terminal and go to frontend folder by typing --> cd frontend
then type --> npm start
