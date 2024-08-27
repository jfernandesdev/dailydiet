import { IMeal } from "@components/MealCard";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      dashboard: undefined;
      mealDetails: { meal: IMeal };
      mealForm: { type: "ADD" | "EDIT", meal?: IMeal };
      feedback: { type: "SUCCESS" | "FAIL" };
    }
  }
}