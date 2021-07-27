import dayjs from "dayjs";
import { AppError } from "src/shared/errors/AppError";
import { RentalsRepositoryInMemory } from "../../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase"

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", ()=> {
    const dayAdd24Hours = dayjs().add(1,"day").toDate();
    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
    })


    it("shoud be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute({
            user_id:"1234",
            car_id:"12345666",
            expected_return_date: dayAdd24Hours,
        });

        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_date");
    })


    it("shoud not be able to create a new rental if there is another open to the same user", async () => {

        expect(async () => {
            await createRentalUseCase.execute({
                user_id:"1234",
                car_id:"12345666",
                expected_return_date: dayAdd24Hours,
            });
    
            await createRentalUseCase.execute({
                user_id:"1234",
                car_id:"12345666",
                expected_return_date: dayAdd24Hours,
            });
    
        }).rejects.toBeInstanceOf(AppError);
    })

    it("shoud not be able to create a new rental if there is another open to the same car", async () => {

        expect(async () => {
            await createRentalUseCase.execute({
                user_id:"123",
                car_id:"test",
                expected_return_date: dayAdd24Hours,
            });
    
            await createRentalUseCase.execute({
                user_id:"3333",
                car_id:"test",
                expected_return_date: dayAdd24Hours,
            });
    
        }).rejects.toBeInstanceOf(AppError);
    })










})