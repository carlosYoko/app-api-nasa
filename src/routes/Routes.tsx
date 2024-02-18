import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/home/Home';
import Detail from '../views/detail/Detail';
import {TRouteStackParams} from '../types';

const Stack = createNativeStackNavigator<TRouteStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7, 26, 93, 255)',
  },
  headerTitleStyle: {
    color: '#ffffff',
  },
};
const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={routeScreenDefaultOptions}
      />
      <Stack.Screen
        name="Detalle"
        component={Detail}
        options={routeScreenDefaultOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
