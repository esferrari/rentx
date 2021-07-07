import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCAse } from "./ListaCarsUseCase"


let listCarsUseCAse: ListCarsUseCAse;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", ()=> {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCAse = new ListCarsUseCAse(carsRepositoryInMemory);
    })
    it("should be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            name:"Audi",
            description:"Audi azul",
            daily_rate: 20,
            license_plate:"1111",
            fine_amount:40,
            brand:"Audio",
            category_id: "0000"
        })

        const cars = await listCarsUseCAse.execute({});

        expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name:"Audiaaa",
            description:"Audi azul",
            daily_rate: 20,
            license_plate:"1111",
            fine_amount:40,
            brand:"Audio3333",
            category_id: "0000"
        })

        const cars = await listCarsUseCAse.execute({
            brand:"Audio3333"
        });

        expect(cars).toEqual([car]);
    })
})