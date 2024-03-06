import { Badge } from "@chakra-ui/react";

export const NutrientsBadge = ({ recipe, name }) => {
  let quantity;
  let unit;

  switch (name) {
    case "CARBS":
      quantity = recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed();
      unit = recipe.recipe.totalNutrients.CHOCDF.unit;
      break;
    case "PROTEIN":
      quantity = recipe.recipe.totalNutrients.PROCNT.quantity.toFixed();
      unit = recipe.recipe.totalNutrients.PROCNT.unit;
      break;
    case "FAT":
      quantity = recipe.recipe.totalNutrients.FAT.quantity.toFixed();
      unit = recipe.recipe.totalNutrients.FAT.unit;
      break;
    case "CHOLESTEROL":
      quantity = recipe.recipe.totalNutrients.CHOLE.quantity.toFixed();
      unit = recipe.recipe.totalNutrients.CHOLE.unit;
      break;
    case "SODIUM":
      quantity = recipe.recipe.totalNutrients.NA.quantity.toFixed();
      unit = recipe.recipe.totalNutrients.NA.unit;
      break;
  }

  return (
    <>
      <Badge
        color="gray.500"
        variant="outline"
        padding="0.5em"
        borderRadius="xl"
        width="12.5em"
        height="2.5em"
        margin="0.2em"
      >
        {quantity} {unit} {name}
      </Badge>
    </>
  );
};
