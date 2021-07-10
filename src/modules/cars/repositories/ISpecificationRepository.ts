import { Specification } from "../infra/typeorm/entities/Specification";


interface ICreateSpecificationDTO {
    name:string;
    description: string;
}

interface ISpecificationRepository {
    create({description,name}: ICreateSpecificationDTO): Promise<Specification>; 
    findByname(name: string): Promise<Specification>;
    findNyIds(ids: string[]): Promise<Specification[]>;
}


export { ISpecificationRepository,ICreateSpecificationDTO};