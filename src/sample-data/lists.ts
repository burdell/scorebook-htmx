import { Category } from "../types";

export const categoryList: Category[] = [
  {
    name: "Perfect Games",
    description: "All perfect games in MLB since 1922.",
    categoryId: "perfectgames",
    type: "category",
  },
  {
    name: "Random Braves Games",
    description: "Some notable Braves games",
    categoryId: "randos",
    type: "category",
  },
  {
    name: "Interesting Pitching Games",
    description: "Games with fun pitching things",
    categoryId: "pitching",
    type: "category",
  },
  {
    name: "Interesting Hitting Games",
    description: "Games with fun hitting things",
    categoryId: "hitting",
    type: "category",
  },
  {
    name: "2019 Braves Season",
    description: "All 162 regular season & playoff games.",
    categoryId: "braves-2019",
    type: "series",
  },
  {
    name: "2020 Braves Season",
    description: "All 60 regular season & playoff games.",
    categoryId: "braves-2020",
    type: "series",
  },
  {
    name: "2021 World Series Champion Atlanta Braves Season",
    description:
      "All games of the World Series Champions Atlanta Braves season",
    categoryId: "braves-2021",
    type: "series",
  },
  {
    name: "1995 Braves Playoffs",
    description: "All 1995 Braves Playoff Games",
    categoryId: "1995-playoffs",
    type: "series-group",
  },
];
