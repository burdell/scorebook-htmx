import { Category, CategoryGameList } from "./types";

import { categoryList } from "./sample-data/lists";
import { categoryGames } from "./sample-data/categoryGames";

export async function getCategories(): Promise<Category[]> {
  return Promise.resolve(categoryList);
}

export async function getCategory(
  categoryId: string
): Promise<CategoryGameList> {
  const category = categoryList.find((c) => c.categoryId === categoryId);
  const categoryGame = categoryGames.find((cg) => cg.categoryId === categoryId);
  if (!category || !categoryGame) {
    throw new Error(`Invalid categoryId: ${categoryId}`);
  }

  return Promise.resolve({
    categoryId,
    games: categoryGame?.games,
  });
}
