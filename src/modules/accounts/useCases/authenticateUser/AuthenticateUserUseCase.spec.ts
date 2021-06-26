import { AppError } from "src/errors/AppError";
import { CreateCategoryUseCase } from "src/modules/cars/UseCases/CreateCategory/CreateCategoryUseCase";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


describe(" Authenticate User", () => {
    let authenticateUserUseCase: AuthenticateUserUseCase;
    let usersRepositoryInMemory: UsersRepositoryInMemory;
    let createUsersUseCase: CreateUserUseCase;
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);

        createUsersUseCase = new CreateUserUseCase(usersRepositoryInMemory);

    })
    it("Should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "1234",
            email: "user@test.com",
            password: "3333",
            name: "User Test"
        };

        await createUsersUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email:user.email,
            password:user.password
        })

        expect(result).toHaveProperty("token");
    })  

    it("Should not be able to authenticate an no existent user", async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email:"false@email.com",
                password: "111"
            })
        }).rejects.toBeInstanceOf(AppError);
    })

    it("Should not be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license:"9999",
                email:"user@user.com",
                password: "12345",
                name:"User test Error"
            }

            await createUsersUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email:user.email,
                password: "54321"
            })
        }).rejects.toBeInstanceOf(AppError);
    })
})