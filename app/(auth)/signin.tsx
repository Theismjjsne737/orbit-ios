import { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { router } from 'expo-router';
import { OrbitWordmark } from '../../components/OrbitLogo';
import { saveUser, loadData } from '../../lib/storage';

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  // TODO: Replace with real expo-auth-session OAuth flows for Google and Apple
  async function handleDemoSignIn(provider: 'google' | 'apple') {
    setLoading(true);
    try {
      const email = provider === 'google' ? 'demo@gmail.com' : 'demo@privaterelay.appleid.com';
      await saveUser({ email, plan: 'free', signedInAt: new Date().toISOString() });
      const data = await loadData();
      if (data.onboardingComplete) {
        router.replace('/dashboard');
      } else {
        router.replace('/onboarding');
      }
    } catch {
      Alert.alert('Sign in failed', 'Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-6 justify-between py-12">
        {/* Top */}
        <View className="items-center mt-16">
          <View className="w-16 h-16 rounded-full bg-accent/20 items-center justify-center mb-6">
            <View className="w-8 h-8 rounded-full bg-accent items-center justify-center">
              <View className="w-3.5 h-3.5 rounded-full bg-white/90" />
            </View>
          </View>
          <OrbitWordmark />
          <Text className="text-white text-3xl font-bold mt-8 text-center">
            Track your AI spend
          </Text>
          <Text className="text-white/40 text-center mt-3 leading-relaxed">
            See every AI subscription in one place.{'\n'}Know what you're actually paying.
          </Text>
        </View>

        {/* Sign-in buttons */}
        <View className="gap-3">
          <TouchableOpacity
            onPress={() => handleDemoSignIn('apple')}
            disabled={loading}
            className="flex-row items-center justify-center gap-3 bg-white py-4 rounded-xl"
          >
            <Text className="text-background text-lg">  </Text>
            <Text className="text-background font-semibold text-base">
              {loading ? 'Signing in…' : 'Continue with Apple'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleDemoSignIn('google')}
            disabled={loading}
            className="flex-row items-center justify-center gap-3 bg-white/8 border border-white/10 py-4 rounded-xl"
          >
            <Text className="text-white text-lg">G</Text>
            <Text className="text-white font-semibold text-base">Continue with Google</Text>
          </TouchableOpacity>

          <Text className="text-white/20 text-xs text-center mt-2">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
