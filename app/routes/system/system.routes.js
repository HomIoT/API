import express from "express";
import { System } from "$controllers/index.js";

const Router = express.Router();

Router.get("/", System.ALL);
Router.post("/", System.NEW);
Router.get("/:id", System.SINGLE);
Router.patch("/:id", System.UPDATE);

export default Router;
