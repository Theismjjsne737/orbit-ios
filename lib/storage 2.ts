import AsyncStorage from '@react-native-async-storage/async-storage';
import { OrbitData, OrbitUser, UserSubscription, Goal } from './types';

const KEY = 'orbit-data';
const USER_KEY = 'orbit-user';

const defaultData: OrbitData = {
  goal: null,
  subscriptions: [],
  onboardingComplete: false,
  user: null,
  customTools: [],
};

function migrateData(data: OrbitData): OrbitData {
  return {
    ...data,
    subscriptions: (Array.isArray(data.subscriptions) ? data.subscriptions : []).map(s => ({
      ...s,
      renewsOn: s.renewsOn !== undefined ? s.renewsOn : null,
    })),
  };
}

export async function loadData(): Promise<OrbitData> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return defaultData;
    const parsed: OrbitData = { ...defaultData, ...JSON.parse(raw) };
    return migrateData(parsed);
  } catch (err) {
    console.error('Failed to load data:', err);
    return defaultData;
  }
}

export async function saveData(data: OrbitData): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save data:', err);
    throw err;
  }
}

export async function setGoal(goal: Goal): Promise<void> {
  const data = await loadData();
  await saveData({ ...data, goal });
}

export async function setSubscriptions(subscriptions: UserSubscription[]): Promise<void> {
  const data = await loadData();
  await saveData({ ...data, subscriptions });
}

export async function completeOnboarding(): Promise<void> {
  const data = await loadData();
  await saveData({ ...data, onboardingComplete: true });
}

export async function markToolUsed(toolId: string): Promise<void> {
  const data = await loadData();
  const subscriptions = data.subscriptions.map(s =>
    s.toolId === toolId ? { ...s, lastUsed: new Date().toISOString() } : s
  );
  await saveData({ ...data, subscriptions });
}

export async function resetData(): Promise<void> {
  await AsyncStorage.multiRemove([KEY, USER_KEY]);
}

export async function saveUser(user: OrbitUser): Promise<void> {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    const data = await loadData();
    await saveData({ ...data, user });
  } catch (err) {
    console.error('Failed to save user:', err);
    throw err;
  }
}

export async function loadUser(): Promise<OrbitUser | null> {
  try {
    const raw = await AsyncStorage.getItem(USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as OrbitUser;
  } catch (err) {
    console.error('Failed to load user:', err);
    return null;
  }
}

export async function signOut(): Promise<void> {
  await AsyncStorage.removeItem(USER_KEY);
}

export async function upgradeToPro(email: string): Promise<void> {
  const user: OrbitUser = {
    email,
    plan: 'pro',
    signedInAt: new Date().toISOString(),
  };
  await saveUser(user);
}

export async function updateSubscriptionPrice(toolId: string, price: number): Promise<void> {
  const data = await loadData();
  const subscriptions = data.subscriptions.map(s =>
    s.toolId === toolId ? { ...s, monthlyPrice: price } : s
  );
  await saveData({ ...data, subscriptions });
}

export async function addSubscription(sub: UserSubscription): Promise<void> {
  const data = await loadData();
  await saveData({ ...data, subscriptions: [...data.subscriptions, sub] });
}

export function getTotalMonthlySpend(data: OrbitData): number {
  return data.subscriptions.reduce((sum, s) => sum + s.monthlyPrice, 0);
}

export function getIdleTools(data: OrbitData, thresholdDays = 30): UserSubscription[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - thresholdDays);
  return data.subscriptions.filter(s => {
    if (!s.lastUsed) return true;
    return new Date(s.lastUsed) < cutoff;
  });
}
