import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "./storageConfig";

import { IMeal } from "./addNewMeal";

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
  
    const meals: IMeal[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
} 