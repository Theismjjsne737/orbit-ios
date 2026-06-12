export type Goal =
  | 'learn-to-code'
  | 'build-a-product'
  | 'get-promoted'
  | 'automate-work'
  | 'creative-projects'
  | 'just-exploring';

export type Plan = 'free' | 'pro';

export interface OrbitUser {
  email: string;
  plan: Plan;
  signedInAt: string;
}

export interface AiTool {
  id: string;
  name: string;
  category: 'coding' | 'writing' | 'image' | 'research' | 'video' | 'productivity' | 'other';
  defaultPrice: number;
  url: string;
  description: string;
}

export interface UserSubscription {
  toolId: string;
  monthlyPrice: number;
  addedAt: string;
  lastUsed: string | null;
  renewsOn: string | null;
}

export interface OrbitData {
  goal: Goal | null;
  subscriptions: UserSubscription[];
  onboardingComplete: boolean;
  user: OrbitUser | null;
  customTools: AiTool[];
}

export const FREE_LIMIT = 4;
