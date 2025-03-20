export interface Exercise {
  name: string;
  sets: number;
  reps: string | number;
  equipment?: string;
}

export interface WorkoutDay {
  exercises: Exercise[];
}

export interface WorkoutPlan {
  days: WorkoutDay[];
}