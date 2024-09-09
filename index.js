const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');


dotenv.config();

mongoose
  .connect(
    process.env.MONGO_URI,
  ).then(() => {
    console.log("DB Connected");
  }).catch((error) => {
    console.log(error);
  });



const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
