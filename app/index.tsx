import RecipeCard from "@/components/RecipeCard";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <RecipeCard />
    </View>
  );
}
