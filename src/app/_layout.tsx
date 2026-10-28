import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "welcome",
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
    </Stack>
    </SafeAreaProvider>
  );
}
