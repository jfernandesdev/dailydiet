import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Dashboard } from "@screens/Dashboard";
import { MealDetails } from "@screens/MealDetails";
import { MealForm } from "@screens/MealForm";
import { Feedback } from "@screens/Feedback";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="mealForm" component={MealForm} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  )
}