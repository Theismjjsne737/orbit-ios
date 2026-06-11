# Orbit — Native

Track every AI subscription in one place. See what you spend, catch idle tools, and stop paying for things you don't use.

Built with Expo (React Native) — iOS and Android from a single TypeScript codebase.

## Stack

| Layer | Choice |
|---|---|
| Framework | Expo SDK 56 + Expo Router v4 |
| Language | TypeScript |
| Styling | NativeWind v4 (Tailwind CSS for React Native) |
| Storage | AsyncStorage |
| Navigation | File-based routing (`app/` directory) |
| Target | iOS (App Store), Android |

## Screens

| Route | Description |
|---|---|
| `app/index.tsx` | Auth gate — routes to sign-in, onboarding, or dashboard |
| `app/(auth)/signin.tsx` | Apple + Google sign-in |
| `app/onboarding.tsx` | 4-step setup: goal → tools → profile → pricing |
| `app/dashboard.tsx` | Spend hero, tool cards by category, idle warnings |

## Features

- **Spend tracking** — total monthly and yearly cost across all AI tools
- **Idle detection** — flags tools unused for 30+ days
- **100+ AI tools** — pre-loaded catalog with default prices
- **Goal-based onboarding** — picks relevant tools based on your use case
- **Free tier** — track up to 4 tools at no cost
- **Pro tier** — unlimited tools, custom prices, renewal reminders (IAP via StoreKit — see TODO)

## Project Structure

```
orbit-native/
├── app/
│   ├── _layout.tsx          # Root Stack shell
│   ├── index.tsx            # Auth gate
│   ├── onboarding.tsx       # 4-step onboarding flow
│   ├── dashboard.tsx        # Main spend dashboard
│   └── (auth)/
│       ├── _layout.tsx      # Auth group layout
│       └── signin.tsx       # Sign-in screen
├── components/
│   └── OrbitLogo.tsx        # Wordmark component
├── data/
│   └── tools.ts             # AI tool catalog + suggestion logic
├── lib/
│   ├── types.ts             # Shared TypeScript types
│   └── storage.ts           # AsyncStorage read/write layer
├── global.css               # Tailwind entrypoint
├── tailwind.config.js
├── babel.config.js
├── metro.config.js
└── app.json                 # Bundle ID, permissions, splash
```

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npx expo start

# Run on iOS simulator
npx expo run:ios

# Run on Android emulator
npx expo run:android
```

Requires Node 18+ and Expo CLI. For physical device testing, install the Expo Go app.

## App Store Config

- **Bundle ID**: `io.orbitapp.orbit`
- **iOS permissions**: Face ID (`NSFaceIDUsageDescription`), encryption flag set
- **Splash / icon**: configured in `app.json` — replace `assets/` images before submitting

## Notes

- **No backend** — all data is stored locally via AsyncStorage. No network requests in v1.
- **Authentication** — currently wired to demo values. Replace `handleDemoSignIn` in `signin.tsx` with real `expo-auth-session` OAuth flows for Google and Apple.
- **In-app purchase** — marked with `TODO: Apple requires in-app purchase for digital subscriptions — implement StoreKit IAP here`. Do not add a web payment flow for Pro; Apple will reject the app.
- **Payments** — No Stripe. Pro upgrade must go through Apple IAP on iOS.

## Web Version

The web version of Orbit lives at `/Documents/Projects/orbit` — built with Next.js 16, TypeScript, and localStorage. This native app is a direct port with AsyncStorage replacing localStorage.
