import React from "react"
import { Tabs } from "expo-router"
import { MaterialIcons, AntDesign } from "@expo/vector-icons"

const tabs = [
  { name: "home", title: "Home", icon: "home" },
  { name: "tasks", title: "Tabs", icon: "list" },
  { name: "news", title: "News", icon: "article" },
  { name: "profile", title: "Profile", icon: "person" }
] as const
// DRY - Don't Repeat Yourself
const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    //   tabBar={(prop) => <></>}
    >
      {tabs.map(({ name, title, icon }: any) => (
        <Tabs.Screen
          name={name}
          options={{
            title: title,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name={icon} color={color} size={size} />
            )
          }}
        />
      ))}
    </Tabs>
  )
}

export default DashboardLayout

{
  /* <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          //   data
          // const color = data.color
          // const { color } = data
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen name="news" options={{ title: "News" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} /> */
}
