import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaContactos from './screens/ListaScreen';
import DetalleContacto from './screens/DetalleScreen';
import NuevoContacto from './screens/NuevoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen
          name="Lista"
          component={ListaContactos}
          options={{ title: 'Mis Contactos' }}
        />
        <Stack.Screen
          name="Detalle"
          component={DetalleContacto}
        />
        <Stack.Screen
          name="Nuevo"
          component={NuevoContacto}
          options={{ title: 'Agregar Contacto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}