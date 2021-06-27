import { getRepository, Repository } from "typeorm";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>

    constructor(){
        this.repository = getRepository(Specification);
    }  
    
    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name
        });
        
        await this.repository.save(specification);

    }

    async findByname(name: string): Promise<Specification> {
        const specification = this.repository.findOne({name});

        return specification;


    }
}


export { SpecificationRepository}