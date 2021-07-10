import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/Specification"
import { ICreateSpecificationDTO, ISpecificationRepository } from "../../../repositories/ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>

    constructor(){
        this.repository = getRepository(Specification);
    }      
    async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            description,
            name
        });
        
        await this.repository.save(specification);

        return specification;

    }

    async findByname(name: string): Promise<Specification> {
        const specification = this.repository.findOne({name});

        return specification;


    }

    async findNyIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findByIds(ids);

        return specifications; 
    }
}


export { SpecificationRepository}