import { inject, injectable} from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


interface IRequest {
    name:string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {

    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationRepository){}

    async execute({name,description}: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByname(name);

        if(specificationAlreadyExists){
            throw new AppError("Specification already exists");
        }

        await this.specificationsRepository.create({name,description});
    }
}


export {CreateSpecificationUseCase}