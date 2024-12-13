import * as HttpResponse from "../utils/http-helper";
import * as repository from "../respositories/clubs-repository";

export const getClubService = async () => {
  const data = await repository.findAllClubs();
  const response = HttpResponse.ok(data);

  return response;
};
