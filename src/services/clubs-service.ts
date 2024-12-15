import * as HttpResponse from "../utils/http-helper";
import * as repository from "../respositories/clubs-repository";

export const getClubService = async () => {
  const data = await repository.findClubs();
  const response = HttpResponse.ok(data);

  return response;
};

export const getClubsByIdService = async (id: number) => {
  const data = await repository.findClubs();
  const dataClub = data[id - 1];

  const response = HttpResponse.ok(dataClub);

  return response;
};
