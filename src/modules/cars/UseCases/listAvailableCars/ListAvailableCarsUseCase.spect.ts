import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCAse } from "./ListAvailableCarsUseCase"


let listAvailableCarsUseCAse: ListAvailableCarsUseCAse;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", ()=> {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCAse = new ListAvailableCarsUseCAse(carsRepositoryInMemory);
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

        const cars = await listAvailableCarsUseCAse.execute({});

        expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name:"Audiaaa",
            description:"Audi azul",
            daily_rate: 20,
            license_plate:"1111",
            fine_amount:40,
            brand:"Audio3333",
            category_id: "0000"
        })

        const cars = await listAvailableCarsUseCAse.execute({
            brand:"Audio3333"
        });

        expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name:"car3",
            description:"Audi azul",
            daily_rate: 20,
            license_plate:"11110",
            fine_amount:40,
            brand:"Audio3333",
            category_id: "0000"
        })

        const cars = await listAvailableCarsUseCAse.execute({
            name:"car3"
        });

        expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name:"car3",
            description:"Audi azul",
            daily_rate: 20,
            license_plate:"11110",
            fine_amount:40,
            brand:"Audio3333",
            category_id: "12345"
        })

        const cars = await listAvailableCarsUseCAse.execute({
            name:"12345"
        });

        expect(cars).toEqual([car]);
    })
})
})