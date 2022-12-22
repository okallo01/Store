import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './Home'
import Products from './Products'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home'

  switch (routeName) {
    case 'Home':
      return 'Home'
    case 'Products':
      return 'Products'
  }
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          if (route.name == 'Home') {
            iconName = 'home'
          } else if (route.name == 'Products') {
            iconName = "cart"
          } else if (route.name == "AboutUs") {
            iconName = "ios-reader"
          }
          return <Ionicons name={iconName} color={color} size={size} />
        }
      })}>
      <Tab.Screen name='Home' component={Home} options={{headerShown:false}} />
      <Tab.Screen name='Products' component={Products} options={{headerShown:false}}/>
      <Tab.Screen name='AboutUs' component={AboutUs} options={{headerShown:false}} />
    </Tab.Navigator>
  )
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='MainTabNavigator' component={MainTabNavigator} options={({ route }) => ({headerTitle: getHeaderTitle(route), headerShown: false})}/>
        <Stack.Screen name='ContactUs' component={ContactUs} options={({ route }) => ({title: route.params.item.name, headerShown: true})}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator