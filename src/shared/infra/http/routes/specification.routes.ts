import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../../../../modules/cars/UseCases/CreateSpecification/CreateSpecificationController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", ensureAuthenticated,ensureAdmin, createSpecificationController.handle)


export { specificationRoutes};
