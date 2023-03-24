import express from "express";
import { Auth } from "$controllers/index.js";

const Router = express.Router();

Router.post("/register", Auth.REGISTER);
Router.post("/login", Auth.LOGIN);

export default Router;
