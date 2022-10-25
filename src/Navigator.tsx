import { useMemo, FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';

import {HOME_PAGE_ROUTE} from "./constants/routes";

const Stack = createNativeStackNavigator();

type TRouteParams = {
    name: string;
    component: FunctionComponent;
    options?: NativeStackNavigationOptions;
}
const routes: Array<TRouteParams> = [{
    name: HOME_PAGE_ROUTE,
    component: HomeScreen,
    options: {
        header: () => null,
    },
}];

export default () => {
    const routeNodes = useMemo(() => routes.map((routeParams) => (
        <Stack.Screen key={routeParams.name} {...routeParams} />
    )), []);

    return (
        <NavigationContainer>
            <Stack.Navigator>{routeNodes}</Stack.Navigator>
        </NavigationContainer>
    );
};