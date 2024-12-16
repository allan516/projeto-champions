import * as HttpResponse from "../utils/http-helper";
import * as repository from "../respositories/clubs-repository";

export const getClubService = async () => {
  const data = await repository.findClubs();
  const response = HttpResponse.ok(data);

  return response;
};

export const getClubsByIdService = async (id: number) => {
  const data = await repository.findClubs();
  let response = null;
  if (data[id - 1] !== undefined) {
    const dataClub = data[id - 1];

    response = HttpResponse.ok(dataClub);
  } else {
    response = HttpResponse.badRequest();
  }

  return response;
};
