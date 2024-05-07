import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Rastreamento from './src/pages/Rastreamento';
import Main from './src/pages/Main';
import Salvos from './src/pages/Salvos';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTintColor: '#000',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#f9ca24',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'RastreiAqui',
          }}
        />
        <Stack.Screen
          name="Salvos"
          component={Salvos}
          options={{
            title: 'Encomendas salvas',
          }}
        />
        <Stack.Screen
          name="Rastreamento"
          component={Rastreamento}
          options={{
            title: 'Rastreamento de objetos',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
