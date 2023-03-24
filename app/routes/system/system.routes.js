import express from "express";
import { System } from "$controllers/index.js";

const Router = express.Router();

Router.get("/", System.ALL);
Router.post("/", System.NEW);
Router.get("/reset", System.RESET);
Router.get("/:id", System.SINGLE);
Router.patch("/:id", System.UPDATE);
Router.delete("/:id", System.DELETE);

export default Router;
