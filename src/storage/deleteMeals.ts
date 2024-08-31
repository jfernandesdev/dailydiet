import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "./storageConfig";

import { mealsGetAll } from "./mealsGetAll";

export async function deleteMeal(id: string) {
  try {
    const storedMeals = await mealsGetAll();

    const updatedMeals = storedMeals.filter(meal => meal.id !== id);

    const storageData = JSON.stringify(updatedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storageData);
  } catch (error) {
    throw error;
  }
} 