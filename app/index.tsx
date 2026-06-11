import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { loadData, loadUser } from '../lib/storage';

export default function Gate() {
  useEffect(() => {
    (async () => {
      const [data, user] = await Promise.all([loadData(), loadUser()]);
      if (!user) {
        router.replace('/(auth)/signin');
      } else if (!data.onboardingComplete) {
        router.replace('/onboarding');
      } else {
        router.replace('/dashboard');
      }
    })();
  }, []);

  return (
    <View className="flex-1 bg-background items-center justify-center">
      <ActivityIndicator color="#7c3aed" size="large" />
    </View>
  );
}
