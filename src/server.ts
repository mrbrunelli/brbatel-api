import "dotenv";
import express from "express";
import "./database";
import { routes } from "./routes";
import { errors } from "celebrate";
import { notFoundRoute } from "./middlewares/not-found";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());
app.use("*", notFoundRoute);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));