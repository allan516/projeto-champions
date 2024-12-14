import { Request, Response } from "express";
import * as service from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
  const response = await service.getClubService();
  res.status(response.statusCode).json(response.body);
};

export const getClubsById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const response = await service.getClubsByIdService(id);
  res.status(response.statusCode).json(response.body);
};
