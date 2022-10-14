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
let userDbPort = 5432;

app.listen(appPort, () =>{
    console.log(`mode: ${process.env.NODE_ENV}`)
    console.log(`App listen on port ${appPort}`)
    startDatabase()
    console.log(`Db listen on port ${userDbPort}`)
});

export default app;