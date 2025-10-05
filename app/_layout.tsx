import { ContextProvider } from "@/context/Context";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <ContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10
  }
});