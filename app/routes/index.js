import express from "express";

import SystemRoutes from "$routes/system/system.routes.js";
import AuthRoutes from "$routes/auth/auth.routes.js";

import { jwt } from "$middlewares/index.js";

const Router = express();

Router.use("/systems", SystemRoutes);
Router.use("/auth", AuthRoutes);

export default Router;
