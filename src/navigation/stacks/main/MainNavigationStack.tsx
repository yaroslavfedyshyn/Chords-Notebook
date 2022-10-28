import { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import router from './router';

const Stack = createNativeStackNavigator();

export default function MainNavigationStack() {
  const routeNodes = useMemo(
    () =>
      router.map(routeParams => (
        <Stack.Screen key={routeParams.name} {...routeParams} />
      )),
    [],
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>{routeNodes}</Stack.Navigator>
    </NavigationContainer>
  );
}
