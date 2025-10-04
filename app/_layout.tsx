import { ContextProvider } from "@/context/Context";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <ContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ContextProvider>
  );
}
