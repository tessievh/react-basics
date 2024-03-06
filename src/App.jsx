import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
import { Center } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipeItem, setSelectedRecipe] = useState();

  return (
    <Center background="lightblue">
      <div>
        {selectedRecipeItem ? (
          <RecipePage recipe={selectedRecipeItem} clickFn={setSelectedRecipe} />
        ) : (
          <>
            <RecipeListPage clickFn={setSelectedRecipe} />
          </>
        )}
      </div>
    </Center>
  );
};
