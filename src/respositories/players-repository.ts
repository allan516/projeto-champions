import { PlayerModel } from "../models/player-model";

const dataBase: PlayerModel[] = [
  { id: 1, name: "Ronaldo Fofomeno" },
  { id: 2, name: "Messi" },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase;
};

export const findPlayersById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find((player) => {
    player.id === id;
  });
};
