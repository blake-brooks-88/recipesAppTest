import { render } from "@testing-library/react-native";

import { recipes } from "@/utils/recipes";

import RecipeCard from "../components/RecipeCard";

describe("<RecipeCard />", () => {
  test("Recipe title renders correctly on RecipeCard", () => {
    const { getByText } = render(<RecipeCard />);

    getByText(`Title: ${recipes[0].title}`);
  });
  test("Recipe Prep Time In Minutes renders correctly on RecipeCard", () => {
    const { getByText } = render(<RecipeCard />);

    getByText(
      `Prep Time: ${recipes[0].prepTimeInMinutes.toString()} minute(s)`
    );
  });
  test("All ingredients render correctly on RecipeCard", () => {
    const { getByText } = render(<RecipeCard />);

    recipes[0].ingredientList.forEach((ingredient) => {
      getByText(ingredient);
    });
  });
  test("All steps render correctly on RecipeCard", () => {
    const { getByText } = render(<RecipeCard />);

    recipes[0].instructionsList.forEach((instruction) => {
      getByText(instruction);
    });
  });
});
