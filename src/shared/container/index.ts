import { container } from "tsyringe"
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { ICarsRepository } from "src/modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "src/modules/cars/infra/typeorm/repositories/CarsRepository";
import { SpecificationRepository } from "src/modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { ICarsImagesRepository } from "src/modules/cars/repositories/ICarsImagesRepository";
import { CarsImagesRepository } from "src/modules/cars/infra/typeorm/repositories/CarsImageRepository";

// ICagetoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);


container.registerSingleton<ICarsRepository>(
    "CarsRepository", 
    CarsRepository 
);

container.registerSingleton<ICarsImagesRepository>(
    "CarsImagesRepository", 
    CarsImagesRepository
);