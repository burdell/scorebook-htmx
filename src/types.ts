export type Category = {
  name: string;
  description: string;
  categoryId: string;
  type: "category" | "series" | "series-group";
};

export type CategoryGameList = Pick<Category, "categoryId"> & {
  games: {
    date: string;
    homeTeam: string;
    visitingTeam: string;
    id: string;
    gameDescription: string | undefined;
    location: string;
    homeScore: number;
    visitingScore: number;
    matchup: string;
  }[];
};

export type GameMetadata = {
  displayName: string;
};
