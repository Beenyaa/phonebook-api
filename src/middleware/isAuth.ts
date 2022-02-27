import { Request, Response, NextFunction } from "express";
import { verify, sign } from "jsonwebtoken";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    //Get the token from the head
    const token = <string>req.headers.authorization?.split(" ")[1];
    let payload;
  
    //Try to validate the token and get data
    try {
      payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
      res.locals.payload = payload;
    } catch (error) {
      //If token is not valid, respond with 401 (unauthorized)
      return res.status(401).send("Unauthorised");
    }
  
    //The token is valid for 1 hour
    //We want to send a new token on every request
    const newToken = sign({}, process.env.ACCESS_TOKEN_SECRET!, {
      expiresIn: "1h"
    });
    res.setHeader("token", newToken);
  
    //Call the next middleware or controller
    next();
  };