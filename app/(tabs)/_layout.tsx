import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DataProvider } from '../../src/componentes/Context/DataContext';  // Make sure DataProvider is in place
import Inicio from '../../src/componentes/Auth/Inicio';
import Login from '../../src/componentes/Auth/Login';
import Register from '../../src/componentes/Auth/Register';
import Shop from '../../src/componentes/Shop/Shop';
import Profile from '../../src/componentes/Profile/Profile';
import ProductDetail from '@/src/componentes/Products/ProductDetail';
import Products from '@/src/componentes/Products/Products';
import Envio from '../../src/componentes/Compra/Envio';
import ModalComponent from '../../src/componentes/ModalComponent/ModalComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Envio" component={Envio} />
        <Stack.Screen name="ModalComponent" component={ModalComponent} />
      </Stack.Navigator>
    </DataProvider>
  );
}
