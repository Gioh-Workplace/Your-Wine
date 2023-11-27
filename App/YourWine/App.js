import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons1 from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { CartProvider } from './CartContext';

import HomeMain from './components/screens/home/HomeMain';
import SearchPage from './components/screens/Pesquisa/Pesquisa';
import Carrinho from './components/screens/cart/Carrinho'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#691823',
            inactiveTintColor: 'Red',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeMain}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons1 name="home" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchPage}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Carrinho"
            component={Carrinho}
            options={{
              tabBarLabel: 'Carrinho',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons1 name="shopping-cart" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
