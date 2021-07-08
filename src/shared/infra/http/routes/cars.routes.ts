import { Router } from "express";
import { CreateCarController } from "src/modules/cars/UseCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "src/modules/cars/UseCases/listAvailableCars/ListAvaiableCarsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);


carsRoutes.get("/available",listAvailableCarsController.handle)

export { carsRoutes}