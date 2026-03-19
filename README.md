# Mobile Dashboard Skeleton (High-Fidelity)

A professional-grade React Native dashboard application built with **Expo** and **TypeScript**. This project demonstrates "app-feel" execution, clean component architecture, and advanced navigation patterns required for high-quality mobile products.

##  Key Features
- **High-Fidelity Dark Theme:** A centralized design system using a custom color palette and typography constants.
- **Dynamic Analytics Visualization:** Interactive line charts implemented via `react-native-chart-kit` and `react-native-svg`.
- **Advanced Navigation:** A custom-refactored Stack navigation system using **Expo Router**, featuring smooth `slide_from_right` transitions and deep-linking capabilities.
- **Optimized UI/UX:**
    - Pixel-perfect safe area handling using `react-native-safe-area-context`.
    - Micro-interactions (fade-in animations) using the `Animated` API.
    - Defensive rendering to handle dynamic routing parameters.

##  Tech Stack
- **Framework:** Expo (SDK 50+)
- **Language:** TypeScript
- **Navigation:** Expo Router (File-based)
- **Icons:** Expo Vector Icons (Ionicons)
- **Visuals:** React Native SVG & Chart Kit

##  Architecture & Best Practices
This project follows the **Single Source of Truth** principle to ensure the code is scalable and maintainable:

- **`/app`**: Clean routing structure. Removed default boilerplate to implement a focused Stack-only hierarchy for better UX.
- **`/components`**: Atomic design approach. UI is broken down into reusable components (e.g., `TaskItem`, `UserProfile`) to minimize prop drilling and maximize reusability.
- **`/constants`**: Centralized configuration for `Colors`, `Tasks`, and `AnalyticsData`. Zero hardcoded strings or hex codes in screen files.
- **Performance:** Implemented `useNativeDriver` for animations to ensure 60fps transitions.

##  Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo Go app on your mobile device (optional for testing)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>