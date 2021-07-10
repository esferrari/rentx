import { specificationRoutes } from "src/shared/infra/http/routes/specification.routes";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";


class SpecificationRepositoryInMemory implements ISpecificationRepository{
    speficiations: Specification[] = [];
    async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, {
            description,
            name,

        });
        
        this.speficiations.push(specification); 

        return specification;
    }
    async findByname(name: string): Promise<Specification> {
        return this.speficiations.find(
            specification => specification.name === name
        );
    }
    async findNyIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = this.speficiations.filter(specification => ids.includes(specification.id))

        return allSpecifications;
    }

}

export { SpecificationRepositoryInMemory}