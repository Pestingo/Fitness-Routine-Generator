# Fitness Routine Generator

A modern web application that generates personalized workout plans based on your fitness goals, available time, and equipment. Built with React, TypeScript, and Tailwind CSS.

![Fitness Routine Generator](https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200)

## Features

- **Personalized Workout Plans**: Generate custom 3-day workout routines tailored to your needs
- **Multiple Fitness Goals**: 
  - Weight Loss
  - Muscle Gain
  - Endurance
  - Flexibility
- **Time-Adaptive**: Plans adjust based on your available time (15-90 minutes)
- **Equipment Flexibility**: Support for various equipment options or bodyweight-only exercises
- **Modern UI**: Clean, responsive design with intuitive controls
- **Beautiful Design**: Gradient backgrounds, frosted glass effects, and smooth animations

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Select your fitness goal from the dropdown menu
2. Choose how much time you have available per session
3. Select the equipment you have access to
4. Click "Generate My Workout Plan"
5. View your personalized 3-day workout routine
6. Generate new plans as needed

## Exercise Database

The application includes a comprehensive database of exercises categorized by:
- Fitness goals (weight loss, muscle gain, endurance, flexibility)
- Equipment requirements
- Exercise duration and intensity

Each exercise includes:
- Name
- Sets and reps
- Equipment requirements (if any)
- Proper form guidelines

## Design Features

- **Custom Color Palettes**:
  - Primary (blue tones)
  - Accent (purple tones)
  - Energy (orange tones)
- **Modern UI Elements**:
  - Gradient text and buttons
  - Frosted glass backgrounds
  - Smooth hover transitions
  - Responsive layout
  - Interactive components

## Project Structure

```
src/
├── components/
├── types/
│   └── index.ts         # TypeScript interfaces
├── utils/
│   └── workoutGenerator.ts  # Workout generation logic
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Designed by Pestingo 2025
- Exercise database compiled from certified fitness professionals
- Icons provided by Lucide React

## Screenshots

### Form Interface
![Form Interface](https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=1200)

### Workout Plan
![Workout Plan](https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=1200)

---

Made with ❤️ by Pestingo