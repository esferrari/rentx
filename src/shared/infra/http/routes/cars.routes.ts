import { Router } from "express";
import { CreateCarController } from "src/modules/cars/UseCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "src/modules/cars/UseCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "src/modules/cars/UseCases/listAvailableCars/ListAvaiableCarsController";
import { UploadCarImagesController } from "src/modules/cars/UseCases/UploadCarImage/UploadCarImagesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import uploadConfig from "../../../../config/upload";
import multer from "multer";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarsSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload("./tmp/cars"))

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);


carsRoutes.get("/available",listAvailableCarsController.handle)

carsRoutes.post("/specification/:id", ensureAuthenticated, ensureAdmin, createCarsSpecificationController.handle);

carsRoutes.post("/images/:id", ensureAuthenticated, ensureAdmin, upload.array("images"), uploadCarImagesController.handle)

export { carsRoutes}