import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";


interface IPayload {
    user_id: string;
}



export async function ensureAuthenticated(request: Request,response: Response, next: NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Token missing",401);
    }

    const [, token] = authHeader.split(" ");

    try{
        const { user_id } = verify(token,"854a5673d6901228e289b5a63b539f4a") as IPayload;
        
        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if(!user){
            throw new AppError("User not found",401);
        }

        request.user = {
            id: user_id
        }

        next();

    }catch(error){
        throw new AppError("Invalid Token!", 401);
    };
    
}