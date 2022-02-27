import { Request, Response } from "express";
import {sign,} from "jsonwebtoken";
import { getRepository } from "typeorm";

class AuthController {
  static login = async (req: Request, res: Response) => {

    //Sing JWT, valid for 1 hour
    const token = sign(
      {},
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.send(token);
  };

}
export default AuthController;