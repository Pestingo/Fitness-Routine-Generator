import React, { useState } from 'react';
import { Dumbbell, Clock, Target, ChevronRight, Sparkles } from 'lucide-react';
import { WorkoutPlan } from './types';
import { generateWorkoutPlan } from './utils/workoutGenerator';

function App() {
  const [formData, setFormData] = useState({
    goal: '',
    timeAvailable: '',
    equipment: [] as string[],
  });
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const plan = generateWorkoutPlan(formData);
    setWorkoutPlan(plan);
  };

  const handleEquipmentToggle = (item: string) => {
    setFormData(prev => ({
      ...prev,
      equipment: prev.equipment.includes(item)
        ? prev.equipment.filter(i => i !== item)
        : [...prev.equipment, item]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-accent-50 to-energy-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-600 to-energy-600">
            Fitness Routine Generator
          </h1>
          <p className="text-lg text-primary-700">Design your perfect workout plan</p>
          <p className="text-sm text-accent-600 mt-2">Designed by Pestingo 2025</p>
        </header>

        {!workoutPlan ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary-100">
            <div className="mb-8">
              <label className="flex items-center text-lg font-semibold text-primary-800 mb-3">
                <Target className="w-5 h-5 mr-2 text-accent-500" />
                What's your fitness goal?
              </label>
              <select
                required
                value={formData.goal}
                onChange={(e) => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                className="w-full p-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 bg-white/50"
              >
                <option value="">Select your goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="endurance">Endurance</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="flex items-center text-lg font-semibold text-primary-800 mb-3">
                <Clock className="w-5 h-5 mr-2 text-accent-500" />
                Time available per session
              </label>
              <select
                required
                value={formData.timeAvailable}
                onChange={(e) => setFormData(prev => ({ ...prev, timeAvailable: e.target.value }))}
                className="w-full p-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 bg-white/50"
              >
                <option value="">Select time available</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="flex items-center text-lg font-semibold text-primary-800 mb-3">
                <Dumbbell className="w-5 h-5 mr-2 text-accent-500" />
                Available Equipment
              </label>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {['Dumbbells', 'Resistance Bands', 'Pull-up Bar', 'Bench', 'Kettlebell', 'No Equipment'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleEquipmentToggle(item)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      formData.equipment.includes(item)
                        ? 'bg-accent-100 border-accent-400 text-accent-700 shadow-inner'
                        : 'border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 via-accent-500 to-energy-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:from-primary-600 hover:via-accent-600 hover:to-energy-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-lg"
            >
              Generate My Workout Plan
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        ) : (
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">
                Your Custom Workout Plan
              </h2>
              <Sparkles className="w-6 h-6 text-energy-500" />
            </div>
            
            <div className="space-y-6">
              {workoutPlan.days.map((day, index) => (
                <div key={index} className="border-b border-primary-100 pb-6 last:border-0">
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">Day {index + 1}</h3>
                  <ul className="space-y-3">
                    {day.exercises.map((exercise, exIndex) => (
                      <li key={exIndex} className="flex items-start group">
                        <span className="bg-gradient-to-br from-accent-100 to-primary-100 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1 group-hover:from-accent-200 group-hover:to-primary-200 transition-colors">
                          {exIndex + 1}
                        </span>
                        <div>
                          <p className="font-medium text-primary-900">{exercise.name}</p>
                          <p className="text-primary-600">{exercise.sets} sets × {exercise.reps} reps</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={() => setWorkoutPlan(null)}
              className="mt-8 w-full bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 py-3 px-6 rounded-lg font-medium hover:from-primary-100 hover:to-accent-100 transition-colors border border-primary-200"
            >
              Generate Another Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;