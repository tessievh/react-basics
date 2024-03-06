import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipePage } from "./RecipePage";

export const RecipeListPage = ({ clickFn }) => {
  let [recipe, setRecipe] = useState();

  return (
    <>
      <Box>
        {recipe ? (
          <RecipePage recipe={recipe} clickFn={setRecipe} />
        ) : (
          <RecipeSearch clickFn={setRecipe} />
        )}
      </Box>
    </>
  );
};
