import { View, Text } from 'react-native';

export function OrbitWordmark() {
  return (
    <View className="flex-row items-center gap-2">
      <View className="w-6 h-6 rounded-full bg-violet-600 items-center justify-center">
        <View className="w-2.5 h-2.5 rounded-full bg-white/90" />
      </View>
      <Text className="text-white font-bold text-[17px] tracking-tight">orbit</Text>
    </View>
  );
}
