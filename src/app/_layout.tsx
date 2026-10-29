import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider } from "../context/UserContext";

export const unstable_settings = {
  anchor: "welcome",
};

export default function RootLayout() {
  return (
    
    <SafeAreaProvider>
      <UserProvider>
        <Stack screenOptions={{ headerShown: false }}>
        </Stack>
      </UserProvider>
    </SafeAreaProvider>
  );
}
