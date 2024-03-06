import {
  Card,
  Box,
  Button,
  Image,
  CardBody,
  Heading,
  Text,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { NutrientsBadge } from "../components/ui/NutrientsBadge";
import { Labels } from "../components/ui/Labels";

export const RecipePage = ({ clickFn, recipe }) => {
  return (
    <>
      <Card variant="filled" key={uuidv4()} size="lg" margin="1em">
        <CardBody>
          <Flex direction="row" justifyContent="space-around" gap="3em">
            <Button onClick={() => clickFn()} colorScheme="blue" size="sm">
              <ArrowBackIcon />
            </Button>
            <Image
              src={recipe.recipe.image}
              width="40vw"
              height="60vh"
              objectFit="auto"
            />
            <Box direction="column" textAlign="left">
              <Text
                color="grey"
                fontSize="lg"
                style={{ textTransform: "uppercase" }}
              >
                {recipe.recipe.mealType}
              </Text>
              <Heading size="md" size="lg" paddingBottom="0.5em">
                {recipe.recipe.label}
              </Heading>

              <Text color="gray.600">
                Total cooking time: {recipe.recipe.totalTime}
              </Text>

              <Text color="gray.600">Servings: {recipe.recipe.yield}</Text>

              <Text fontWeight="bold" color="gray.700" marginTop="1em">
                INGREDIENTS
              </Text>
              <List spacing="0.5em">
                {recipe.recipe.ingredientLines.map((ingredient) => (
                  <ListItem
                    listStyleType="disc"
                    marginStart="1em"
                    key={uuidv4()}
                  >
                    {ingredient.replaceAll("*", "")}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Flex>
          <Flex
            direction="row"
            justifyContent="flex-start"
            gap="3em"
            marginTop="2em"
            marginStart="9em"
          >
            <Box width="40vw">
              <Labels recipe={recipe} name="HEALTH LABELS"></Labels>
            </Box>
            <Flex direction="column" wrap="no-wrap">
              <Labels recipe={recipe} name="DIET"></Labels>
              <Labels recipe={recipe} name="CAUTIONS"></Labels>
            </Flex>
            <Box width="30vw">
              <Text fontWeight="bold" color="gray.700" marginBottom="0.5em">
                TOTAL NUTRIENTS
              </Text>
              <NutrientsBadge recipe={recipe} name="CARBS"></NutrientsBadge>
              <NutrientsBadge recipe={recipe} name="PROTEIN"></NutrientsBadge>
              <NutrientsBadge recipe={recipe} name="FAT"></NutrientsBadge>
              <NutrientsBadge
                recipe={recipe}
                name="CHOLESTEROL"
              ></NutrientsBadge>
              <NutrientsBadge recipe={recipe} name="SODIUM"></NutrientsBadge>
            </Box>
          </Flex>
          {/* </Box> */}
        </CardBody>
      </Card>
    </>
  );
};
