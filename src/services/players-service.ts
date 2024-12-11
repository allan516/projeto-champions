import * as playerRepository from "../respositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

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
    response = HttpResponse.ok(data);
  } else {
    response = HttpResponse.noContent();
  }
  return response;
};
