import { AppError } from "src/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"


describe("Create Category", () => {

    let createCategoryUseCase: CreateCategoryUseCase;
    let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
        
    })

    it("Should be able to create a new category", async () => {
        const category = {
            name: "Category Test",
            description: "Category Description Test",
        }
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })

        const categoryCreated = await categoriesRepositoryInMemory.findByname(category.name)

        
        expect(categoryCreated).toHaveProperty("id");

    })

    it("Should not be able to create a new category with same name exists", async () => {
        expect(async () => {
            const category = {
                name: "Category Test",
                description: "Category Description Test",
            }
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            })
    
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            })
        }).rejects.toBeInstanceOf(AppError);

        

    })

})