import { format, parseISO } from 'date-fns';
import { IMeal } from '@components/MealCard';

interface ISectionData {
  title: string;
  data: IMeal[];
}

const formatDate = (date: string) => format(parseISO(date), 'dd.MM.yyyy');

// Agrupamento e ordenação das refeições por data e hora
export const getGroupedMeals = (meals: IMeal[]): ISectionData[] => {
  return meals
    .sort((a, b) => {
      const dateA = parseISO(a.date).getTime();
      const dateB = parseISO(b.date).getTime();
      const timeA = new Date(`1970-01-01T${a.time}:00`).getTime();
      const timeB = new Date(`1970-01-01T${b.time}:00`).getTime();

      return dateB - dateA || timeB - timeA; // Ordenação por data e hora
    })
    .reduce<ISectionData[]>((acc, meal) => {
      const formattedDate = formatDate(meal.date);
      const section = acc.find((section) => section.title === formattedDate);

      if (section) {
        section.data.push(meal);
      } else {
        acc.push({ title: formattedDate, data: [meal] });
      }

      return acc;
    }, [])
    .sort((a, b) => new Date(b.title).getTime() - new Date(a.title).getTime()); // Ordenação das seções por data
};

// Calculo da porcentagem de refeições dentro da dieta
export const getDietPercentage = (meals: IMeal[]): number => {
  const totalMeals = meals.length;
  if (totalMeals === 0) return 0;
  const mealsWithinDiet = meals.filter(meal => meal.isWithinDiet).length;
  return (mealsWithinDiet / totalMeals) * 100;
};

// Calculo da melhor sequência de pratos dentro da dieta
export const getBestDietStreak = (meals: IMeal[]): number => {
  let bestStreak = 0;
  let currentStreak = 0;

  // Ordena as refeições por data e hora
  const sortedMeals = meals
    .sort((a, b) => {
      const dateA = parseISO(a.date).getTime();
      const dateB = parseISO(b.date).getTime();
      const timeA = new Date(`1970-01-01T${a.time}:00`).getTime();
      const timeB = new Date(`1970-01-01T${b.time}:00`).getTime();

      return dateA - dateB || timeA - timeB;
    });

  for (const meal of sortedMeals) {
    if (meal.isWithinDiet) {
      currentStreak += 1;
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return bestStreak;
};

// Estatísticas
export const getDietStats = (meals: IMeal[]) => {
  const totalMeals = meals.length;
  const mealsWithinDiet = meals.filter(meal => meal.isWithinDiet).length;
  const mealsOutsideDiet = totalMeals - mealsWithinDiet;

  return {
    totalMeals,
    mealsWithinDiet,
    mealsOutsideDiet,
    bestStreak: getBestDietStreak(meals)
  };
};