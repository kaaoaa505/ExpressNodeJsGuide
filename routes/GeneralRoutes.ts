import express from "express";
import GeneralController from "../controllers/GeneralController";

const GeneralRoutes = express.Router();

GeneralRoutes.get("/", GeneralController.home);

export default GeneralRoutes;
