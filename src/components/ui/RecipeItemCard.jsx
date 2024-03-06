import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { Labels } from "../ui/Labels";

export const RecipeItemCard = ({ clickFn, recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <Card
          onClick={() => clickFn(recipe)}
          variant="filled"
          borderRadius="xl"
          w="sm"
          h="70vh"
          margin="0.5em"
          cursor="pointer"
          _hover={{ transform: "scale(1.05)" }}
          key={uuidv4()}
        >
          <CardBody>
            <Flex direction="column" alignItems="center" textAlign="center">
              <Image
                src={recipe.recipe.image}
                height="30vh"
                width="25vw"
                objectFit="cover"
                borderRadius="3xl"
              />
              <Text
                color="grey"
                fontSize="sm"
                style={{ textTransform: "uppercase" }}
              >
                {recipe.recipe.mealType}
              </Text>
              <Heading size="md" marginBottom="0.5em">
                {recipe.recipe.label}
              </Heading>

              {recipe.recipe.healthLabels.includes("Vegan") && (
                <Badge key={uuidv4()} colorScheme="purple">
                  Vegan
                </Badge>
              )}

              {recipe.recipe.healthLabels.includes("Vegetarian") && (
                <Badge key={uuidv4()} colorScheme="purple">
                  Vegetarian
                </Badge>
              )}

              {recipe.recipe.dietLabels.length > 0 && (
                <Labels recipe={recipe} name="DIET"></Labels>
              )}
              {recipe.recipe.cautions.length > 0 && (
                <Labels recipe={recipe} name="CAUTIONS"></Labels>
              )}
            </Flex>
          </CardBody>
        </Card>
      ))}
    </>
  );
};
