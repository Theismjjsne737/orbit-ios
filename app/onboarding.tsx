import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { OrbitWordmark } from '../components/OrbitLogo';
import { AI_TOOLS, GOALS } from '../data/tools';
import { setGoal, setSubscriptions, completeOnboarding, saveUser } from '../lib/storage';
import { Goal, UserSubscription, FREE_LIMIT } from '../lib/types';

type Step = 'goal' | 'tools' | 'profile' | 'pricing';

const STEPS: Step[] = ['goal', 'tools', 'profile', 'pricing'];

export default function Onboarding() {
  const [step, setStep] = useState<Step>('goal');
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function toggleTool(id: string) {
    setSelectedTools(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < FREE_LIMIT) {
        next.add(id);
      }
      return next;
    });
  }

  async function finish() {
    if (!selectedGoal || loading) return;
    setLoading(true);
    try {
      const now = new Date().toISOString();
      const subs: UserSubscription[] = Array.from(selectedTools).map(toolId => {
        const tool = AI_TOOLS.find(t => t.id === toolId)!;
        return { toolId, monthlyPrice: tool.defaultPrice, addedAt: now, lastUsed: null, renewsOn: null };
      });
      await setGoal(selectedGoal);
      await setSubscriptions(subs);
      await saveUser({ email: email.trim() || 'guest@orbit.app', plan: 'free', signedInAt: now });
      await completeOnboarding();
      router.replace('/dashboard');
    } finally {
      setLoading(false);
    }
  }

  const stepIndex = STEPS.indexOf(step);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-6 pt-4 pb-2">
        <OrbitWordmark />
      </View>

      {/* Progress dots */}
      <View className="flex-row gap-2 px-6 py-3">
        {STEPS.map((s, i) => (
          <View
            key={s}
            className={`h-1 flex-1 rounded-full ${
              s === step ? 'bg-accent' : i < stepIndex ? 'bg-accent/50' : 'bg-white/10'
            }`}
          />
        ))}
      </View>

      {step === 'goal' && (
        <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 32 }}>
          <Text className="text-white text-2xl font-bold mt-6 mb-2">What's your main goal?</Text>
          <Text className="text-white/50 mb-6">We'll recommend the right AI tools for you.</Text>
          <View className="gap-3">
            {GOALS.map(g => (
              <TouchableOpacity
                key={g.id}
                onPress={() => setSelectedGoal(g.id as Goal)}
                className={`flex-row items-center gap-4 p-4 rounded-xl border ${
                  selectedGoal === g.id ? 'border-accent bg-accent/10' : 'border-white/10 bg-white/5'
                }`}
              >
                <Text className="text-2xl">{g.emoji}</Text>
                <Text className="text-white font-medium flex-1">{g.label}</Text>
                {selectedGoal === g.id && (
                  <View className="w-5 h-5 rounded-full bg-accent items-center justify-center">
                    <Text className="text-white text-xs">✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => selectedGoal && setStep('tools')}
            className={`mt-8 py-4 rounded-xl items-center ${selectedGoal ? 'bg-accent' : 'bg-white/10'}`}
          >
            <Text className={`font-semibold text-base ${selectedGoal ? 'text-white' : 'text-white/30'}`}>
              Continue
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {step === 'tools' && (
        <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 32 }}>
          <Text className="text-white text-2xl font-bold mt-6 mb-2">Which AI tools do you use?</Text>
          <Text className="text-white/50 mb-6">Pick up to {FREE_LIMIT} on the free plan.</Text>
          <View className="gap-2">
            {AI_TOOLS.map(tool => {
              const selected = selectedTools.has(tool.id);
              const disabled = !selected && selectedTools.size >= FREE_LIMIT;
              return (
                <TouchableOpacity
                  key={tool.id}
                  onPress={() => toggleTool(tool.id)}
                  disabled={disabled}
                  className={`flex-row items-center gap-3 p-3 rounded-xl border ${
                    selected
                      ? 'border-accent bg-accent/10'
                      : disabled
                      ? 'border-white/5 opacity-40'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <View
                    className={`w-5 h-5 rounded border ${
                      selected ? 'bg-accent border-accent' : 'border-white/30'
                    } items-center justify-center`}
                  >
                    {selected && <Text className="text-white text-[10px]">✓</Text>}
                  </View>
                  <View className="flex-1">
                    <Text className="text-white font-medium text-sm">{tool.name}</Text>
                    <Text className="text-white/40 text-xs">
                      ${tool.defaultPrice}/mo · {tool.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View className="flex-row gap-3 mt-8">
            <TouchableOpacity
              onPress={() => setStep('goal')}
              className="flex-1 py-4 rounded-xl border border-white/10 items-center"
            >
              <Text className="text-white/60 font-medium">Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setStep('profile')}
              className="flex-[2] py-4 rounded-xl bg-accent items-center"
            >
              <Text className="text-white font-semibold">
                Continue ({selectedTools.size} selected)
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {step === 'profile' && (
        <View className="flex-1 px-6">
          <Text className="text-white text-2xl font-bold mt-6 mb-2">Your account</Text>
          <Text className="text-white/50 mb-6">
            Add your email to save your stack across devices.
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor="rgba(255,255,255,0.25)"
            autoCapitalize="none"
            keyboardType="email-address"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base"
          />
          <Text className="text-white/30 text-xs mt-3">Optional — skip to continue as guest.</Text>
          <View className="flex-row gap-3 mt-8">
            <TouchableOpacity
              onPress={() => setStep('tools')}
              className="flex-1 py-4 rounded-xl border border-white/10 items-center"
            >
              <Text className="text-white/60 font-medium">Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setStep('pricing')}
              className="flex-[2] py-4 rounded-xl bg-accent items-center"
            >
              <Text className="text-white font-semibold">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {step === 'pricing' && (
        <View className="flex-1 px-6">
          <Text className="text-white text-2xl font-bold mt-6 mb-2">You're all set</Text>
          <Text className="text-white/50 mb-8">Start free — upgrade anytime for unlimited tools.</Text>

          <View className="border border-white/10 rounded-2xl p-5 mb-4">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-white font-bold text-lg">Free</Text>
              <Text className="text-white/50">$0 / mo</Text>
            </View>
            <Text className="text-white/50 text-sm">• Up to {FREE_LIMIT} AI tools</Text>
            <Text className="text-white/50 text-sm">• Spend tracking</Text>
            <Text className="text-white/50 text-sm">• Idle tool alerts</Text>
          </View>

          <View className="border border-accent rounded-2xl p-5 mb-8 relative overflow-hidden">
            <View className="absolute top-3 right-3 bg-accent px-2 py-0.5 rounded-full">
              <Text className="text-white text-xs font-semibold">PRO</Text>
            </View>
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-white font-bold text-lg">Pro</Text>
              {/* TODO: Apple requires in-app purchase for digital subscriptions — implement StoreKit IAP here */}
              <Text className="text-accent font-bold">$4.99 / mo</Text>
            </View>
            <Text className="text-white/70 text-sm">• Unlimited AI tools</Text>
            <Text className="text-white/70 text-sm">• Custom tool prices</Text>
            <Text className="text-white/70 text-sm">• Renewal reminders</Text>
            <Text className="text-white/70 text-sm">• Export to CSV</Text>
          </View>

          <TouchableOpacity
            onPress={finish}
            disabled={loading}
            className="py-4 rounded-xl bg-white items-center mb-3"
          >
            <Text className="text-background font-bold text-base">
              {loading ? 'Saving…' : 'Start for free'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStep('profile')} className="py-3 items-center">
            <Text className="text-white/30 text-sm">Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
