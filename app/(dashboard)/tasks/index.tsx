import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const Tasks = () => {
  const router = useRouter()
  return (
    <View className="flex-1 bg-gray-50">
      <TouchableOpacity
      className="bg-blue-600/80 rounded-full shadow-lg p-2 m-6 absolute bottom-0 right-0"
        onPress={() => {
          router.push("/tasks/form")
        }}
      >
        <MaterialIcons name="add" size={40} color="#fff" />
      </TouchableOpacity>
      <Text>Tasks</Text>
      <Text>Tasks</Text>
      <Text>Tasks</Text>
      <Text>Tasks</Text>
    </View>
  )
}

export default Tasks
