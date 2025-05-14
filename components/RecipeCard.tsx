import { View, Text } from "react-native";
import React from "react";

import { recipes } from "@/utils/recipes";

const RecipeCard = () => {
  return (
    <View>
      <Text>Title: {recipes[0].title}</Text>
      <Text>Prep Time: {recipes[0].prepTimeInMinutes} minute(s)</Text>
      {recipes[0].ingredientList.map((ingredient, index) => {
        return <Text key={index}>{ingredient}</Text>;
      })}
      {recipes[0].instructionsList.map((instruction, index) => {
        return <Text key={index}>{instruction}</Text>;
      })}
    </View>
  );
};

// create recipe navigation. swipe to move to next step or click button to go to next step.

export default RecipeCard;
