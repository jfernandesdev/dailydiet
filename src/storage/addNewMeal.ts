import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "./storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export interface IMeal {
  id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  isWithinDiet: boolean;
}

export async function addNewMeal(data: IMeal) {
  try {
    const storedMeals = await mealsGetAll();

    const storageData = JSON.stringify([...storedMeals, data]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storageData);

  } catch (error) {
    throw error;
  }
} 