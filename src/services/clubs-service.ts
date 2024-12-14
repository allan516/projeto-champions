import * as HttpResponse from "../utils/http-helper";
import * as repository from "../respositories/clubs-repository";

export const getClubService = async () => {
  const data = await repository.findAllClubs();
  const response = HttpResponse.ok(data);

  return response;
};

export const getClubsByIdService = async (id: number) => {
  const data = await repository.findClubById(id);
  const response = HttpResponse.ok(data);

  return response;
};
