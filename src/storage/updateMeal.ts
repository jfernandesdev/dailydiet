import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "./storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { IMeal } from "./addNewMeal";

export async function updateMeal(updatedMeal: IMeal) {
  try {
    const storedMeals = await mealsGetAll();

    const updatedMeals = storedMeals.map(meal =>
      meal.id === updatedMeal.id ? updatedMeal : meal
    );

    const storageData = JSON.stringify(updatedMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, storageData);
  } catch (error) {
    throw error;
  }
} 