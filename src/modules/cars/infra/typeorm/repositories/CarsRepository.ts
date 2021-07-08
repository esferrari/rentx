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

    async findAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
        const carsQuery = await this.repository.createQueryBuilder("c")
        .where("available = :available", { available: true});

        if(brand){
            carsQuery.andWhere("c.brand = :brand", { brand });
        }

        if( name){
            carsQuery.andWhere("c.name = :name", { name });
        }

        if(category_id){
            carsQuery.andWhere("c.category_id = :category_id", { category_id });
        }

        const cars = await carsQuery.getMany();

        return cars;

    }


    async findById(id: string): Promise<Car> {
        return this.cars.find(car => car.id === id);
    }

}

export { CarsRepository}