import { WorkoutPlan, Exercise } from '../types';

const exerciseDatabase = {
  'weight-loss': {
    noEquipment: [
      { name: 'Burpees', sets: 3, reps: '45 seconds' },
      { name: 'Mountain Climbers', sets: 3, reps: '45 seconds' },
      { name: 'Jump Squats', sets: 3, reps: 15 },
      { name: 'Push-ups', sets: 3, reps: 12 },
      { name: 'High Knees', sets: 3, reps: '30 seconds' },
    ],
    withEquipment: [
      { name: 'Kettlebell Swings', sets: 3, reps: 15, equipment: 'Kettlebell' },
      { name: 'Dumbbell Rows', sets: 3, reps: 12, equipment: 'Dumbbells' },
      { name: 'Band Resistance Sprints', sets: 3, reps: '30 seconds', equipment: 'Resistance Bands' },
      { name: 'Pull-ups', sets: 3, reps: 8, equipment: 'Pull-up Bar' },
    ]
  },
  'muscle-gain': {
    noEquipment: [
      { name: 'Diamond Push-ups', sets: 4, reps: 12 },
      { name: 'Pike Push-ups', sets: 3, reps: 10 },
      { name: 'Bulgarian Split Squats', sets: 3, reps: 12 },
      { name: 'Chin-ups', sets: 3, reps: 8 },
    ],
    withEquipment: [
      { name: 'Dumbbell Bench Press', sets: 4, reps: 10, equipment: 'Dumbbells' },
      { name: 'Kettlebell Deadlifts', sets: 4, reps: 12, equipment: 'Kettlebell' },
      { name: 'Band Pull-aparts', sets: 3, reps: 15, equipment: 'Resistance Bands' },
      { name: 'Weighted Pull-ups', sets: 4, reps: 8, equipment: 'Pull-up Bar' },
    ]
  },
  'endurance': {
    noEquipment: [
      { name: 'Jump Rope', sets: 3, reps: '2 minutes' },
      { name: 'Mountain Climbers', sets: 3, reps: '1 minute' },
      { name: 'Jumping Jacks', sets: 3, reps: '1 minute' },
      { name: 'High Knees', sets: 3, reps: '1 minute' },
    ],
    withEquipment: [
      { name: 'Band Sprints', sets: 3, reps: '1 minute', equipment: 'Resistance Bands' },
      { name: 'Kettlebell Carries', sets: 3, reps: '2 minutes', equipment: 'Kettlebell' },
      { name: 'Dumbbell Complex', sets: 3, reps: '1 minute', equipment: 'Dumbbells' },
    ]
  },
  'flexibility': {
    noEquipment: [
      { name: 'Dynamic Stretching', sets: 2, reps: '30 seconds each' },
      { name: 'Yoga Flow Sequence', sets: 1, reps: '10 minutes' },
      { name: 'Joint Mobility Work', sets: 2, reps: '5 each joint' },
    ],
    withEquipment: [
      { name: 'Band Assisted Stretches', sets: 2, reps: '30 seconds each', equipment: 'Resistance Bands' },
      { name: 'Foam Rolling', sets: 1, reps: '5 minutes per area', equipment: 'Foam Roller' },
    ]
  }
};

export const generateWorkoutPlan = (formData: { goal: string; timeAvailable: string; equipment: string[] }): WorkoutPlan => {
  const { goal, timeAvailable, equipment } = formData;
  const timeInMinutes = parseInt(timeAvailable);
  
  // Determine number of exercises based on available time
  const exercisesPerDay = Math.floor(timeInMinutes / 10);
  
  // Get relevant exercises based on goal and equipment
  const availableExercises: Exercise[] = [];
  
  // Add equipment-based exercises if equipment is available
  if (equipment.length > 0 && equipment[0] !== 'No Equipment') {
    const equipmentExercises = exerciseDatabase[goal as keyof typeof exerciseDatabase].withEquipment
      .filter(ex => equipment.includes(ex.equipment || ''));
    availableExercises.push(...equipmentExercises);
  }
  
  // Add bodyweight exercises
  availableExercises.push(...exerciseDatabase[goal as keyof typeof exerciseDatabase].noEquipment);
  
  // Generate 3-day workout plan
  const workoutPlan: WorkoutPlan = {
    days: Array(3).fill(null).map(() => ({
      exercises: shuffleArray(availableExercises)
        .slice(0, exercisesPerDay)
        .map(exercise => ({ ...exercise }))
    }))
  };
  
  return workoutPlan;
};

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}