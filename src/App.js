import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { BillDetailsScreen, DashboardScreen, SplashScreen } from './ui/screens'

const routes = [
  { name: 'Dashboard', component: DashboardScreen, headerShown: true, title: 'Utilator' },
  { name: 'BillDetails', component: BillDetailsScreen, title: 'Detalhes da conta' }
]

export default function App() {

  const [loaded, setLoaded] = useState(false)
  const Stack = createStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2 * 1000)
  }, [])

  return loaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(({ name, component, headerShown, title }, index) => (
          <Stack.Screen 
            key={`${index}-${name}`} 
            name={name}
            component={component}
            options={{
              headerShown,
              title
            }} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <SplashScreen />
  )
}

