import express from "express";
import "dotenv/config";
import { startDatabase } from './database/index'
import categoriesRoute from "./routes/categories.routes";
import productsRoute from "./routes/products.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoute);
app.use("/products", productsRoute); 

const appPort = 3000;
let userDbPort = null;

if(process.env.NODE_ENV === "test"){
  userDbPort = 5432;
}
else{
  userDbPort = process.env.DB_PORT;
}

app.listen(appPort, () =>{
    console.log(`App listen on port ${appPort}`)
    startDatabase()
    console.log(`App listen on port ${userDbPort}`)
});

export default app;