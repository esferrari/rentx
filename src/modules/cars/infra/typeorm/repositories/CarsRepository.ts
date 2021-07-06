import { ICreateCarDTO } from "src/modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "src/modules/cars/repositories/ICarsRepository";
import { Car } from "../entities/Car";
import { getRepository, Repository } from "typeorm";



class CarsRepository implements ICarsRepository{

    private repository: Repository<Car>

    constructor() {
        this.repository = getRepository(Car);
    }

    async create({brand,category_id,daily_rate,license_plate,name,description}: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({brand,category_id,daily_rate,license_plate,name,description})

        await this.repository.save(car);
        return car;
        
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({license_plate});
        return car;
    }

}

export { CarsRepository}