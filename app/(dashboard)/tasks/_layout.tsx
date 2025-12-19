import { View, Text } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const TaskLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="index" options={{ title: "Task List" }} />
      <Stack.Screen name="form" options={{ title: "Task Form" }} />
    </Stack>
  )
}

export default TaskLayout
