import { format, parseISO, isValid } from 'date-fns';

import { IMeal } from '@storage/addNewMeal';

interface ISectionData {
  title: string;
  data: IMeal[];
}

const formatDate = (date?: string) => {
  if (!date) return 'Data inválida'; 
  const parsedDate = parseISO(date);
  return isValid(parsedDate) ? format(parsedDate, 'dd.MM.yyyy') : 'Data inválida';
};

const parseTime = (time?: string) => {
  const validTime = time && time.match(/^([01]\d|2[0-3]):([0-5]\d)$/) ? time : '00:00';
  return new Date(`1970-01-01T${validTime}:00`).getTime();
};

// Agrupamento e ordenação das refeições por data e hora
export const getGroupedMeals = (meals: IMeal[]): ISectionData[] => {
  return meals
    .sort((a, b) => {
      const dateA = a.date ? parseISO(a.date).getTime() : 0; 
      const dateB = b.date ? parseISO(b.date).getTime() : 0;
      const timeA = parseTime(a.time);
      const timeB = parseTime(b.time);

      return dateB - dateA || timeB - timeA;
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
    .sort((a, b) => new Date(b.title).getTime() - new Date(a.title).getTime());
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
      const dateA = a.date ? parseISO(a.date).getTime() : 0; 
      const dateB = b.date ? parseISO(b.date).getTime() : 0;
      const timeA = parseTime(a.time);
      const timeB = parseTime(b.time);

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