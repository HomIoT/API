import express from "express";

import SystemRoutes from "$routes/system/system.routes.js";

const Router = express();

Router.use("/systems", SystemRoutes);

export default Router;
