import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { FooterComponent } from '../footer/footer';
import { FITNESS_SOCIALS, WEEKLY_WORKOUT, DIET_PLAN, FITNESS_TIMELINE, HOBBIES, FITNESS_LABELS, type MealPlan, type WorkoutDay } from '../data/fitness.data';
import { LanguageService } from '../services/language';

type MacroKey = 'calories' | 'protein' | 'carbs' | 'fats';

@Component({
  selector: 'app-fitness',
  imports: [RouterLink, TimelineComponent, ScrollRevealDirective, FooterComponent],
  templateUrl: './fitness.html',
  styleUrl: './fitness.scss',
})
export class Fitness {
  socials = FITNESS_SOCIALS;
  weeklyWorkout = WEEKLY_WORKOUT;
  dietPlan = DIET_PLAN;
  fitnessTimeline = FITNESS_TIMELINE;
  hobbies = HOBBIES;
  labels = FITNESS_LABELS;
  selectedWorkoutId = this.weeklyWorkout[0]?.id ?? 'monday';
  nutritionTotals = this.calculateNutritionTotals(this.dietPlan);

  constructor(public langService: LanguageService) {}

  get selectedWorkout(): WorkoutDay {
    return this.weeklyWorkout.find((day) => day.id === this.selectedWorkoutId) ?? this.weeklyWorkout[0];
  }

  get trainingDayCount(): number {
    return this.weeklyWorkout.filter((day) => day.id !== 'sunday').length;
  }

  get totalWorkoutMovements(): number {
    return this.weeklyWorkout.reduce((total, day) => total + day.exercises.length, 0);
  }

  get weeklySetBlocks(): number {
    return this.weeklyWorkout.reduce((total, day) => {
      return total + day.exercises.reduce((dayTotal, exercise) => dayTotal + this.extractSetCount(exercise), 0);
    }, 0);
  }

  selectWorkout(dayId: string): void {
    this.selectedWorkoutId = dayId;
  }

  localizedExercises(day: WorkoutDay): string[] {
    return this.langService.isTr() && day.exercisesTr ? day.exercisesTr : day.exercises;
  }

  shortDayName(day: WorkoutDay): string {
    const trShortNames: Record<string, string> = {
      monday: 'Pzt',
      tuesday: 'Sal',
      wednesday: 'Çar',
      thursday: 'Per',
      friday: 'Cum',
      saturday: 'Cmt',
      sunday: 'Paz'
    };

    if (this.langService.isTr()) {
      return trShortNames[day.id] ?? day.dayNameTr.slice(0, 3);
    }

    return day.dayName.slice(0, 3);
  }

  workoutFocus(day: WorkoutDay): string {
    const focusMap: Record<string, { en: string; tr: string }> = {
      monday: { en: 'Leg control', tr: 'Bacak kontrolü' },
      tuesday: { en: 'Push + arms', tr: 'İtiş + kol' },
      wednesday: { en: 'Pull strength', tr: 'Çekiş gücü' },
      thursday: { en: 'Mobility', tr: 'Mobilite' },
      friday: { en: 'Upper volume', tr: 'Üst vücut hacim' },
      saturday: { en: 'Heavy lower', tr: 'Ağır alt vücut' },
      sunday: { en: 'Recovery', tr: 'Toparlanma' }
    };

    const focus = focusMap[day.id] ?? { en: day.title, tr: day.titleTr };
    return this.langService.isTr() ? focus.tr : focus.en;
  }

  workoutIntensity(day: WorkoutDay): string {
    const intensityMap: Record<string, { en: string; tr: string }> = {
      monday: { en: 'Controlled', tr: 'Kontrollü' },
      tuesday: { en: 'Moderate', tr: 'Orta' },
      wednesday: { en: 'Moderate+', tr: 'Orta+' },
      thursday: { en: 'Recovery', tr: 'Toparlanma' },
      friday: { en: 'Volume', tr: 'Hacim' },
      saturday: { en: 'Heavy', tr: 'Ağır' },
      sunday: { en: 'Off', tr: 'Dinlenme' }
    };

    const intensity = intensityMap[day.id] ?? { en: 'Focused', tr: 'Odaklı' };
    return this.langService.isTr() ? intensity.tr : intensity.en;
  }

  mealTotal(meal: MealPlan, key: MacroKey): number {
    return meal.items.reduce((total, item) => total + item[key], 0);
  }

  macroPercent(value: number, total: number): number {
    return total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0;
  }

  macroCaloriePercent(key: Exclude<MacroKey, 'calories'>): number {
    const grams = this.nutritionTotals[key];
    const multiplier = key === 'fats' ? 9 : 4;
    return this.macroPercent(grams * multiplier, this.nutritionTotals.calories);
  }

  mealMacroCalories(meal: MealPlan, key: Exclude<MacroKey, 'calories'>): number {
    const multiplier = key === 'fats' ? 9 : 4;
    return this.mealTotal(meal, key) * multiplier;
  }

  formatMetric(value: number): string {
    return Number.isInteger(value) ? `${value}` : value.toFixed(1).replace('.0', '');
  }

  private calculateNutritionTotals(meals: MealPlan[]): Record<MacroKey, number> {
    return meals.reduce(
      (totals, meal) => {
        meal.items.forEach((item) => {
          totals.calories += item.calories;
          totals.protein += item.protein;
          totals.carbs += item.carbs;
          totals.fats += item.fats;
        });

        return totals;
      },
      { calories: 0, protein: 0, carbs: 0, fats: 0 }
    );
  }

  private extractSetCount(exercise: string): number {
    const match = exercise.match(/\((\d+)x\d+\)/i);
    return match ? Number(match[1]) : 0;
  }
}
