import { AppError } from "src/shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository"
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


interface IRequest {
    car_id:string;
    specifications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {

    constructor(
        @inject("CarsRepository")       
        private carsRepository: ICarsRepository,

        @inject("SpecificationsRepository")       
        private specificationRepositori: ISpecificationRepository
    ){}


    async execute({car_id, specifications_id}: IRequest): Promise<Car>{

        const carExists = await this.carsRepository.findById(car_id);

        if(!carExists){
            throw new AppError("Car does not exists");
        }

        const specifications = await this.specificationRepositori.findNyIds(specifications_id)

        carExists.specifications = specifications;

        await this.carsRepository.create(carExists);

        return carExists;

        
    }
}

export { CreateCarSpecificationUseCase}