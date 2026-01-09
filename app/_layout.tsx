import { View, Text } from "react-native"
import React from "react"
import { Slot } from "expo-router"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { LoaderProvider } from "@/context/LoaderContext"
import { AuthProvider } from "@/context/AuthContext"

// SafeAreaView from react-native is deprecated
// react-native-safe-area-context is the recommended alternative
// It provides safe gaps on top, left, right, and bottom of the screen

// Like App.tsx
const RootLayout = () => {
  const insets = useSafeAreaInsets()
  // / device safe area values (top, left, right, and bottom)
  console.log(insets)
  return (
    <LoaderProvider>
      <AuthProvider>
        <View className="flex-1" style={{ marginTop: insets.top }}>
          {/* Slot renders the currently active screen */}
          <Slot />
        </View>
      </AuthProvider>
    </LoaderProvider>
    // <SafeAreaView className="flex-1">
    // {/* Slot renders the currently active screen */}
    // <Slot />
    // </SafeAreaView>
  )
}

export default RootLayout
