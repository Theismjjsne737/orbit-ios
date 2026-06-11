import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#040407' },
        animation: 'slide_from_bottom',
      }}
    />
  );
}
