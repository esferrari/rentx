import { Router } from "express";
import { create } from "istanbul-reports";
import { CreateCarController } from "src/modules/cars/UseCases/createCar/CreateCarController";

const carsRoutes = Router();

let createCarController = new CreateCarController();

carsRoutes.post("/", createCarController.handle);

export { carsRoutes}