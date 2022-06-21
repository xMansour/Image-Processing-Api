import { Request } from "express"

declare global {
  namespace Express {
    export interface Request {
      name: string,
      width: number,
      height: number,
      ext: string,
      inputPath:string,
      outputPath:string,
    }
  }
}