import { PlayerModel } from "../models/player-model";
import * as playerRepository from "../respositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
  const data = await playerRepository.findAllPlayers();
  let response = null;
  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await playerRepository.findPlayersById(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }
  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;
  if (Object.keys(player).length !== 0) {
    await playerRepository.insertPlayer(player);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await playerRepository.deleteOnePlayer(id);

  if (isDeleted) {
    response = await HttpResponse.ok({ message: "deleted" });
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  let response = null;
  const data = await playerRepository.findAndModifyPlayer(id, statistics);
  if (data === undefined) {
    response = await HttpResponse.badRequest();
  } else {
    response = await HttpResponse.ok(data);
  }
  return response;
};
