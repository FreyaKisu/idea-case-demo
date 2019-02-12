import Category from "./Category";

export default function fetchTestCategories() {
  return [
    new Category(1, "Parties", "500 €"),
    new Category(2, "Excursions", "500 €"),
    new Category(3, "Sports", "300 €"),
    new Category(4, "Culture", "200 €"),
    new Category(5, "Movie", "100 €"),
    new Category(6, "Purchases", "500 €"),
    new Category(7, "Trainings", "1000 €")
  ];
}
