import { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { OrbitWordmark } from '../components/OrbitLogo';
import { AI_TOOLS, CATEGORIES } from '../data/tools';
import {
  loadData,
  loadUser,
  getTotalMonthlySpend,
  getIdleTools,
  markToolUsed,
  signOut,
} from '../lib/storage';
import { OrbitData, OrbitUser, UserSubscription, FREE_LIMIT } from '../lib/types';

export default function Dashboard() {
  const [data, setData] = useState<OrbitData | null>(null);
  const [user, setUser] = useState<OrbitUser | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function load() {
    const [d, u] = await Promise.all([loadData(), loadUser()]);
    setData(d);
    setUser(u);
  }

  useEffect(() => { load(); }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  }, []);

  async function handleSignOut() {
    Alert.alert('Sign out', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign out', style: 'destructive', onPress: async () => {
          await signOut();
          router.replace('/(auth)/signin');
        },
      },
    ]);
  }

  if (!data) {
    return <View className="flex-1 bg-background" />;
  }

  const totalMonthly = getTotalMonthlySpend(data);
  const totalYearly = totalMonthly * 12;
  const idleTools = getIdleTools(data);
  const activeCount = data.subscriptions.length - idleTools.length;
  const isPro = user?.plan === 'pro';

  // Group subscriptions by category
  const byCategory = data.subscriptions.reduce<Record<string, UserSubscription[]>>((acc, sub) => {
    const tool = AI_TOOLS.find(t => t.id === sub.toolId);
    const cat = tool?.category ?? 'other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(sub);
    return acc;
  }, {});

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#7c3aed" />}
        contentContainerStyle={{ paddingBottom: 48 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-4 pb-2">
          <OrbitWordmark />
          <TouchableOpacity onPress={handleSignOut}>
            <Text className="text-white/40 text-sm">Sign out</Text>
          </TouchableOpacity>
        </View>

        {/* Spend hero */}
        <View className="mx-6 mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
          <Text className="text-white/50 text-sm mb-1">Monthly AI spend</Text>
          <Text className="text-white text-5xl font-bold tracking-tight">
            ${totalMonthly.toFixed(0)}
            <Text className="text-white/30 text-xl font-normal"> /mo</Text>
          </Text>
          <Text className="text-white/30 text-sm mt-1">${totalYearly.toFixed(0)} per year</Text>

          {/* Stat pills */}
          <View className="flex-row gap-3 mt-5">
            <View className="flex-1 bg-white/5 rounded-xl p-3">
              <Text className="text-white font-bold text-lg">{data.subscriptions.length}</Text>
              <Text className="text-white/40 text-xs">Total</Text>
            </View>
            <View className="flex-1 bg-white/5 rounded-xl p-3">
              <Text className="text-white font-bold text-lg">{activeCount}</Text>
              <Text className="text-white/40 text-xs">Active</Text>
            </View>
            <View className={`flex-1 rounded-xl p-3 ${idleTools.length > 0 ? 'bg-amber-500/10' : 'bg-white/5'}`}>
              <Text className={`font-bold text-lg ${idleTools.length > 0 ? 'text-amber-400' : 'text-white'}`}>
                {idleTools.length}
              </Text>
              <Text className={`text-xs ${idleTools.length > 0 ? 'text-amber-400/60' : 'text-white/40'}`}>
                Idle
              </Text>
            </View>
          </View>
        </View>

        {/* Idle warning */}
        {idleTools.length > 0 && (
          <View className="mx-6 mt-4 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <Text className="text-amber-400 font-semibold text-sm mb-1">
              ⚠️ {idleTools.length} tool{idleTools.length > 1 ? 's' : ''} unused for 30+ days
            </Text>
            <Text className="text-amber-400/60 text-xs">
              {idleTools.map(s => AI_TOOLS.find(t => t.id === s.toolId)?.name ?? s.toolId).join(', ')}
            </Text>
            <Text className="text-amber-400/60 text-xs mt-1">
              Cancelling them could save ${idleTools.reduce((sum, s) => sum + s.monthlyPrice, 0)}/mo
            </Text>
          </View>
        )}

        {/* Free tier banner */}
        {!isPro && data.subscriptions.length >= FREE_LIMIT && (
          <View className="mx-6 mt-4 bg-accent/10 border border-accent/30 rounded-xl p-4 flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-accent font-semibold text-sm">You've hit the free limit</Text>
              <Text className="text-accent/60 text-xs">Upgrade to track unlimited tools</Text>
            </View>
            {/* TODO: Apple requires in-app purchase for digital subscriptions — implement StoreKit IAP here */}
            <View className="bg-accent px-3 py-1.5 rounded-lg">
              <Text className="text-white text-xs font-semibold">Upgrade</Text>
            </View>
          </View>
        )}

        {/* Tool cards by category */}
        {data.subscriptions.length === 0 ? (
          <View className="mx-6 mt-8 items-center">
            <Text className="text-white/30 text-center">No tools tracked yet.</Text>
            <TouchableOpacity
              onPress={() => router.replace('/onboarding')}
              className="mt-4 bg-accent px-6 py-3 rounded-xl"
            >
              <Text className="text-white font-semibold">Add tools</Text>
            </TouchableOpacity>
          </View>
        ) : (
          Object.entries(byCategory).map(([cat, subs]) => (
            <View key={cat} className="mt-6">
              <Text className="text-white/40 text-xs font-semibold uppercase tracking-widest px-6 mb-3">
                {CATEGORIES[cat as keyof typeof CATEGORIES] ?? cat}
              </Text>
              <View className="gap-2 px-6">
                {subs.map(sub => {
                  const tool = AI_TOOLS.find(t => t.id === sub.toolId);
                  const idle = idleTools.some(s => s.toolId === sub.toolId);
                  return (
                    <TouchableOpacity
                      key={sub.toolId}
                      onPress={() => markToolUsed(sub.toolId).then(load)}
                      className={`flex-row items-center gap-3 p-4 rounded-xl border ${
                        idle ? 'border-amber-500/20 bg-amber-500/5' : 'border-white/8 bg-white/4'
                      }`}
                    >
                      <View className="flex-1">
                        <View className="flex-row items-center gap-2">
                          <Text className="text-white font-medium">
                            {tool?.name ?? sub.toolId}
                          </Text>
                          {idle && (
                            <View className="bg-amber-500/20 px-1.5 py-0.5 rounded">
                              <Text className="text-amber-400 text-[10px] font-semibold">IDLE</Text>
                            </View>
                          )}
                        </View>
                        <Text className="text-white/40 text-xs mt-0.5">
                          {tool?.description ?? ''}
                        </Text>
                      </View>
                      <Text className="text-white font-semibold">${sub.monthlyPrice}/mo</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
