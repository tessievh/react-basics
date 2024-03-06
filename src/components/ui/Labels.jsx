import { Badge, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export const Labels = ({ recipe, name }) => {
  let category;
  let color;

  switch (name) {
    case "HEALTH LABELS":
      category = recipe.recipe.healthLabels;
      color = "purple";
      break;
    case "DIET":
      category = recipe.recipe.dietLabels;
      color = "green";
      break;
    case "CAUTIONS":
      category = recipe.recipe.cautions;
      color = "red";
      break;
  }

  return (
    <>
      <Text
        fontWeight="bold"
        color="gray.700"
        marginBottom="0.5em"
        marginTop="0.5em"
      >
        {name}
      </Text>
      {category.map((item) => (
        <Badge
          marginRight="1em"
          marginBottom="0.3em"
          colorScheme={color}
          height="1.5em"
          key={uuidv4()}
        >
          {item}
        </Badge>
      ))}
    </>
  );
};
