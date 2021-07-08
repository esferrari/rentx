import { AppError } from "src/shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"


let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("CReate Car Specification", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);
    })


    it("should not be able to add a new specification a now-existent car", async () => {
        expect(async () => {
            const car_id = "1234"
            const specifications_id = ["54321"];
            await createCarSpecificationUseCase.execute({car_id,specifications_id});
        }).rejects.toBeInstanceOf(AppError);
    });


    it("should be able to add a new specification to the car", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car",
            description: "Description CAr",
            daily_rate: 100,
            license_plate: "AAAA-12364",
            fine_amount: 300,
            brand: "Car brand",
            category_id: "category"
        })
        const car_id = "1234"
        const specifications_id = ["54321"];
        await createCarSpecificationUseCase.execute({car_id: car.id,specifications_id});
    });


})