import { Flex, Heading, Stack } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/ui/RecipeItemCard";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";

export const RecipeSearch = ({ clickFn }) => {
  let recipes = [];
  data.hits.map((recipe) => {
    recipes.push(recipe);
  });

  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matches = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <Flex
      direction="row"
      wrap="wrap"
      justifyContent="center"
      alignContent="space-between"
      gap="1em"
      padding="1em"
    >
      <Stack
        direction="column"
        spacing="1em"
        alignItems="center"
        alignSelf="center"
        width="100vw"
        margin="0.7em"
      >
        <Heading size="xl"> Recipe Checker</Heading>
        <TextInput onChange={handleChange} w="25vw"></TextInput>
      </Stack>

      <RecipeItemCard clickFn={clickFn} recipes={matches} />
    </Flex>
  );
};
