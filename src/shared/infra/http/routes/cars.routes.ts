import { Router } from "express";
import { create } from "istanbul-reports";
import { CreateCarController } from "src/modules/cars/UseCases/createCar/CreateCarController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

let createCarController = new CreateCarController();

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);

export { carsRoutes}