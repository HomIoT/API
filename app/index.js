import express from "express";
import cors from "cors";

import routes from "$routes/index.js";
import { log } from "$middlewares/index.js";

const app = express();

app.set("json spaces", 2);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(log);

app.use("/api", routes);

export default app;
