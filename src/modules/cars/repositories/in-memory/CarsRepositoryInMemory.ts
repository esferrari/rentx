import { ICreateUserDTO } from "src/modules/accounts/dtos/ICreateUserDTO";
import { ICarsRepository } from "../ICarsRepository";



class CarsRepositoryInMemory implements ICarsRepository {
    create(data: ICreateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }    
}

export { CarsRepositoryInMemory}