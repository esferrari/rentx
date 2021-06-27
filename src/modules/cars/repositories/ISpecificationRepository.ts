import { Specification } from "../infra/typeorm/entities/Specification";


interface ICreateSpecificationDTO {
    name:string;
    description: string;
}

interface ISpecificationRepository {
    create({description,name}: ICreateSpecificationDTO): Promise<void>; 
    findByname(name: string): Promise<Specification>;
}


export { ISpecificationRepository,ICreateSpecificationDTO};